<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Gate;

use App\Category;
use App\Events\RegisterVisitor;
use App\Http\Requests;
use App\Http\Requests\PostRequest;
use App\PhotoManager;
use App\Post;
use App\Tag;

class PostsController extends Controller
{
    use PhotoManager ;

    protected $Basedir = 'uploaded/posts/p_images/';

    protected $tnBasedir = 'uploaded/posts/p_images/tn/';

    protected $name;
    
    protected $post;

    /**
     * PostsController constructor.
     * @param Post $post
     */
    public function __construct(Post $post)
    {
        $this->middleware(["auth","role:Editor"],["except" =>["index","show"] ]) ;

        $this->post = $post ;

        parent::__construct() ;
    }

    public function index()
    {
        $posts = Post::latest('published_at')->published()->paginate(6);

        return view('posts.index',compact('posts')) ;
    }
    
    /**
     * Show the form for creating a new post.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::lists('name','id') ;
        
        $tags = Tag::lists('name','id') ;

        return view('posts.create',compact('categories','tags')) ;
    }

    /**
     * Store a newly created post in storage.
     *
     * @param PostRequest|Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(PostRequest $request)
    {

        $response = $this->post->checkForExistence('slug', $request->input('slug')) ;

        if($response){

            flash('This post is already exist . Sorry!','warning') ;

            return redirect()->back() ;
        }

        flash('Your Post has been successfully created!','success') ;

        $this->storePost($request);

        return redirect('admin/posts') ;
    }

    /**
     * Display the specified post.
     *
     * @param Category $category
     * @param Post $post
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function show(Category $category , Post $post)
    {
        
        Event::fire(new RegisterVisitor($post));

        return $this->showPost($category, $post);

    }

    /**
     * Show the form for editing posts .
     *
     * @param Post $posts
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @internal param PostRequest|Post $post
     * @internal param PostRequest $request
     */
    public function edit(Post $posts)
    {
        list($categories,$tags) = $this->editPost($posts);

        return view('posts.edit',compact('posts','categories','tags')) ;
    }

    /**
     * Update the specified post in storage.
     *
     * @param PostRequest|Request $request
     * @param Post $post
     * @return \Illuminate\Http\Response
     */
    public function update(Post $post,PostRequest $request)
    {
        $this->authorizeUser($post, $request) ;

        $this->updatePost($post, $request);

        flash('This Post has been successfully updated!') ;

        return redirect('admin/posts') ;
        
    }

    /**
     * Publish a post from dashboard
     *
     * @param Post $post
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function publish(Post $post)
    {
        $this->authorizeUser($post) ;
        
        $post->update(['published_at' => Carbon::now()]) ;


        flash("`` ".$post->title." `` is public now") ;

        return redirect('admin/posts') ;
    }

    /**
     * Remove the specified post from storage.
     *
     * @param Post $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $this->authorizeUser($post) ;
        
        $this->deletePost($post);

        flash('Deleted!') ;
        
        return redirect()->back() ;
    }



    /**
     * Manage post storage
     *
     * @param PostRequest $request
     * @return array
     */
    private function storePost(PostRequest $request)
    {
        $post = Auth::user()->posts()->create($request->all());

        $post->tags()->sync($request->input('tag_list')) ;
        
        $this->addPhoto($post,'photo',$request->file('file')) ;

    }

    /**
     * Manage  update
     *
     * @param Post $post
     * @param PostRequest $request
     * @return mixed
     */
    private function updatePost(Post $post, PostRequest $request)
    {
        $post->update($request->all());

        $post->tags()->sync($request->input('tag_list'))  ;

        $this->updatePhoto($post,'photo', $request);

    }

    /**
     * Make guard for update post
     *
     * @param Post $post
     * @param PostRequest $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response|void
     */
    private function authorizeUser(Post $post, PostRequest $request = null)
    {

        if (Gate::denies('alter-post', $post)) {
            if(is_null($request)){
                
                flash('You are Unauthorized to alter this post','error') ;
                
                return  abort(403, 'Unauthorized');
            }else{
                return $request->ajax() ? response(['message' => 'Unauthorized']) : abort(403, 'Unauthorized');
            }
        }
    }

    /**
     * Manage post displaying
     *
     * @param Category $category
     * @param Post $post
     * @return bool|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @internal param $relatedPosts
     */
    private function showPost(Category $category, Post $post)
    {
        $response = $category->checkForExistence(['id', 'slug'], [$post->category_id, $category->slug]);

        if ($response) {

            return view('posts.show', compact('post','category'));

        } else {
            
            abort(404,'Article inexistant');

            return false;
        }
    }

    /**
     * Manage post editing 
     * 
     * @param Post $posts
     * @return mixed
     */
    private function editPost(Post $posts)
    {
        $this->authorizeUser($posts);

        $categories = Category::lists('name', 'id');

        $tags = Tag::lists('name','id') ;

        return array($categories,$tags) ;
    }

    /**
     * Manage post deleting
     *
     * @param Post $post
     * @throws \Exception
     */
    private function deletePost(Post $post)
    {
        DB::table('post_view')->where('post_id', $post->id)->delete();

        $post->delete();

        $post->tags()->detach();
    }

}

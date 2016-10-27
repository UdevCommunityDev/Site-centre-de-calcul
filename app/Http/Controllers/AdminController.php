<?php

namespace App\Http\Controllers;

use App\Category;
use App\Email;
use App\Post;
use App\Role;
use App\Tag;
use App\User;

use App\Http\Requests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    protected $posts;
    /**
     * @var Email
     */
    protected $email;
    /**
     * @var Tag
     */
    private $tag;
    /**
     * @var Category
     */
    private $category;
    /**
     * @var User
     */
    private $user;
    /**
     * @var Post
     */
    private $post;
    /**
     * @var Role
     */
    private $role;

    public function __construct(Post $post,User $user , Tag $tag,Category $category,Role $role,Email $email)
    {
        parent::__construct() ;
        $this->tag = $tag;
        $this->category = $category;
        $this->user = $user;
        $this->post = $post;
        $this->role = $role;
        $this->email = $email;
        
        $this->middleware('role:Owner')->only(["users","emails","email"]);

        $this->middleware('role:Admin')->only(["categories","tags"]);

        $this->middleware('role:Editor')->only("posts");

    }

    public function users()
    {
        $members = User::all() ;
        
        $roles = $this->role->where('name' ,'!=' ,'Owner')->lists('name','id') ;
        $users = $this->user->where('name' , '!=' , $this->user->getUsersByRole('owner')->first()->name)->lists('name','id');
        $users = ['' => ''] + $users->toArray() ;
        $roles = ['' => ''] + $roles->toArray() ;

        $verifiedUsers = DB::table('pre_register')->where(['verified' => false])->latest('updated_at')->get() ;
//        dd($members) ;

        return view('admin.users',compact('members','users','roles','verifiedUsers'));

    }

    public function posts()
    {
        $pub = $this->post->published();
        $unpub = $this->post->unpublished();
        
        $npub = count($pub) ;
        $nunpub = count($unpub) ;
        
        $published = $pub->paginate(10,['*'],'published_p') ;
        $unpublished = $unpub->paginate(10,['*'],'unpublished_p') ;

        return view('admin.posts',compact('published','unpublished','nunpub','npub'));
    }

    public function categories()
    {
        $categories = $this->category->paginate(5,['*'],'category_p') ;
        
        return view('admin.categories',compact('categories'));
    }

    public function tags()
    {
        $tags = $this->tag->paginate(5,['*'],'tag_p');
            
        return view('admin.tags',compact('tags'));
    }

    public function emails()
    {
        $emails = $this->email->where('to' ,config('mail.from.address'))->latest('created_at')->paginate(7,['*'],'emails_p') ;

        $unread = $this->email->where([
            ['unread','=',false],
            ['from','!=',config('mail.from.address')]
        ])->get()->count() ;

        return view('admin.emails',compact('emails','unread')) ;
    }

    public function destroyEmail($id)
    {
        $this->email->where('id', $id)->delete();

        flash('Deleted!') ;

        return redirect()->back() ;

    }

    public function email($id)
    {
        if(!$this->email->checkForExistence('id',$id)){
            return redirect()->back() ; 
        }
        $data = $this->email->where('id' ,$id) ;

        $email = $data->first() ;

        $data->update(['unread' => 1]) ;

        return view('admin.email',compact('email')) ;

    }

}

<?php

namespace App\Http\Controllers;

use App\Tag;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\DB;

class TagsController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth','role:Admin'],['except' =>['show' , 'index']]) ;

        parent::__construct() ;
    }

    /**
     * Show all tags .
     * @return \Illuminate\Http\Response
     * @internal param Request $request
     * @internal param Tag $tag
     */
    public function index()
    {
        $tags = Tag::all() ;
        
        return view('tags.index',compact('tags')) ;
    }
    /**
     * Store a newly created hashtag in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param Tag $tag
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request , Tag $tag)
    {
        list($slug, $response) = $this->tagValidate($request, $tag);

        if($response){

            flash('This tag is already exist . Sorry!','warning') ;

            return redirect()->back() ;

        }else{

            $name = $this->createTag($request, $tag, $slug);

            flash('Your tag  has been successfully created!','success') ;

        }

        return redirect('admin/tags') ;
    }

    /**
     * Display the specified hashtag.
     *
     * @param Tag $tag
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function show(Tag $tag)
    {
        return view('tags.show',compact('tag')) ;
    }

    /**
     * Show the form for editing the specified hashtag.
     *
     * @param Tag $tag
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function edit(Tag $tag)
    {
        return view('tags.edit',compact('tag')) ;
    }

    /**
     * Update the specified hashtag in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param Tag $tag
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function update(Request $request, Tag $tag)
    {

        $data = $this->fillSlugValue($request,$tag->slug);

        $tag->update($data) ;

        flash('This tag has been successfully updated!') ;

        return redirect('admin/tags')  ;

    }

    /**
     * Remove the specified hashtag from storage.
     *
     * @param Tag $tag
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function destroy(Tag $tag)
    {
        $default_tag = Tag::where('slug' ,'non-classé')->first()->id  ;

        DB::table('post_tag')->where('tag_id',$tag->id)->update(['tag_id' => $default_tag]);

        $tag->delete() ;
        
        flash('Deleted!') ;

        return redirect('admin/tags') ;

    }

    /**
     * @param Request $request
     * @param Tag $tag
     * @param $slug
     * @return mixed
     */
    private function createTag(Request $request, Tag $tag, $slug)
    {
        $data = $this->fillSlugValue($request, $slug);

        $name = $tag->create($data)->slug;

        return $name;
    }

    /**
     * @param Request $request
     * @param Tag $tag
     * @return array
     */
    private function tagValidate(Request $request, Tag $tag)
    {
        $this->validate($request, ['name' => 'required']);

        $slug = str_slug($request->input('name'));

        $response = $tag->checkForExistence('slug', $slug);

        return array($slug, $response);
    }

    /**
     * @param Request $request
     * @param $slug
     * @return array
     */
    private function fillSlugValue(Request $request, $slug)
    {
        $data = $request->all();

        $data['slug'] = $slug;

        return $data ;
    }
}

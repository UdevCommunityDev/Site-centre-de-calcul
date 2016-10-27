<?php

namespace App\Http\Controllers;

use App\Category;

use App\Tag;
use Illuminate\Http\Request;

use App\Http\Requests;

class CategoriesController extends Controller
{
    protected $category;

    /**
     * CategoriesController constructor.
     */
    public function __construct()
    {
        parent::__construct() ;

        $this->middleware(['auth','role:Admin'])->except(['show' , 'index']) ;

        $this->category = new Category() ;

    }

    /**
     * Show all categories.
     * @return \Illuminate\Http\Response
     * @internal param Request $request
     */
    public function index()
    {
        $categories = Category::all() ;

        $tag = Tag::first() ;

        return view('categories.index',compact('categories','tag')) ;
    }
    /**
     * Store a newly created category in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,['name' => 'required']) ;

        $slug = str_slug($request->input('name'),'-')  ;

        $response = $this->category->checkForExistence('slug',$slug);

        if($response){

            flash('This category is already exist . Sorry!','warning') ;

            return redirect()->back() ;

        }else{

            $name = $this->createCategory($request,$slug);

            flash($name.' category has been successfully created!','success') ;
        }

        return redirect('admin/categories') ;
    }

    /**
     * Display the specified category.
     *
     * @param Category $category
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function show(Category $category)
    {
        return view('categories.show' , compact('category')) ;
    }

    /**
     * Show the form for editing the specified category.
     *
     * @param Category $category
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function edit(Category $category)
    {
        return view('categories.edit' ,compact('category')) ;
    }

    /**
     * Update the specified category in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param Category $category
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function update(Request $request, Category $category)
    {
        $this->validate($request,['name' => 'required']) ;

        $this->updateCategory($request, $category);
        
        flash('This category has been successfully updated!') ;
        
        return redirect('admin/categories') ;
    }

    /**
     * Remove the specified category from storage.
     *
     * @param Category $category
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function destroy(Category $category)
    {
        $default_category = Category::where('slug' ,'non-classé')->first()->id ;

        $category->posts()->update(['category_id' => $default_category]) ;

        $category->delete() ;
        
        flash('Deleted!') ;
        
        return redirect('admin/categories') ;
    }

    /**
     * Manage category creating
     *
     * @param Request $request
     * @param $slug
     * @return array|mixed|string
     */
    private function createCategory(Request $request,$slug)
    {
        
        $data = $request->all() ;

        $data['slug'] = $slug ;

        $this->category->create($data)->slug;

    }

    /**
     * Manage category update 
     * 
     * @param Request $request
     * @param Category $category
     * @return mixed
     */
    private function updateCategory(Request $request, Category $category)
    {
        $data = $request->all();

        $slug = str_slug($data['name']) ;

        $data['slug'] = $slug ;

        $category->update($data);

        return $slug;
    }
}

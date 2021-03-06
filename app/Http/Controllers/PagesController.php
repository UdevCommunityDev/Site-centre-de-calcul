<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Post;
use App\Role;
use App\User;

class PagesController extends Controller
{
    public function __construct()
    {
        parent::__construct() ;
    }

    public function home()
    {
        $posts = Post::latest('published_at')->published()->limit(4)->get() ;
        
        return view("pages.home",compact('posts')) ;
    }

    public function about()
    {
        return view("pages.about") ;
    }

    public function blog()
    {
        return view("pages.blog") ;
    }
    
    public function contact()
    {
        return view("pages.contact") ;
    }
    public function join()
    {
        return view("pages.join") ;
    }
    public function errors($type)
    {
        return view("errors.404",compact('type')) ;
    }
    
}

<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesResources;
use Illuminate\Support\Facades\Auth;
use Jenssegers\Date\Date;

class Controller extends BaseController
{
    use AuthorizesRequests, AuthorizesResources, DispatchesJobs, ValidatesRequests;

    /**
     * Controller constructor.
     */
    public function __construct()
    {
        view()->share('signedIn',Auth::check());

        view()->share('user',Auth::user());

        if(Auth::check()){
            view()->share('user'    ,Auth::user()) ;
            view()->share('owner'   ,Auth::user()->hasRole('Owner'))  ;
            view()->share('admin'   ,Auth::user()->hasRole('Admin')  || Auth::user()->hasRole('Owner')) ;
            view()->share('editor'  ,Auth::user()->hasRole('Editor') || Auth::user()->hasRole('Admin') || Auth::user()->hasRole('Owner') ) ;
        }


        Date::setLocale('fr') ;
    }
}

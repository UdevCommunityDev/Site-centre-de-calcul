<?php

namespace App\Http\Middleware;

use App\User;
use Closure;
use Illuminate\Support\Facades\DB;

class hasLink
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $token = $request->route('token') ;
        
        $member = DB::table('pre_register')->where(['token' => $token]);
        
        if((!is_null($token) && $member->exists()) || is_null(User::find(1))){
            
            return $next($request);
            
        }

            /*  ;*/

           
        

        flash('These credentials do not match our records.','error')  ;

        return redirect('/home');
    }
}

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


        if(is_null($token)){
            

            if(!User::select(["*"])->exists()){
                
                return $next($request);

            }else{

                flash('These credentials do not match our records.','error')  ;

                return redirect('/home');
            }


        }else{
            

            $member = DB::table('pre_register')->where(['token' => $token]);

            if($member->exists()) {

                return $next($request);

            }else{

                flash('These credentials do not match our records.','error')  ;

                return redirect('/home');
            }
            
            
        }
    
        
    }
}

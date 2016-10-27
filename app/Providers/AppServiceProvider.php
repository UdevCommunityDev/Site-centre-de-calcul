<?php

namespace App\Providers;

use App\Post;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        view()->composer('partial.shouldReceiveData._recentPost',function ($view){
            $view->with('recentPosts',Post::recentPost());
        });

        view()->composer('partial.shouldReceiveData._popularPost',function ($view){
            
            $view->with('popularPosts',Post::popularPost());
            
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}

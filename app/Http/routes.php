<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::auth();

Route::get('/',function (){

    
    return redirect('/home') ;

});

Route::get('/home','PagesController@home');

//Route::get('/about','PagesController@about');

Route::get('/blog','PostsController@index');

//Route::get('/contact','PagesController@contact');

Route::get('/join','PagesController@join');

Route::get('errors/{header}','PagesController@errors') ;


/*------------------------------------------------*/


Route::group(['as' => 'user.',  'middleware' => ['auth']],function (){

    Route::get('/profile/{member}','UsersController@show')->name('profile');

    Route::get('/profile/{member}/publish','UsersController@publish')->name('publish');

    Route::post('/profile','UsersController@storeInfo')->name('storeInfo');

    Route::match(['PATCH','PUT'],'/profile/','UsersController@storeInfo')->name('updateInfo');

    Route::delete('/profile/{member}','UsersController@destroy')->name('delete');

});


/*------------------------------------------------*/

Route::group(['as' => 'admin.'],function ()
    {

        Route::get('/admin/email/{id}','AdminController@email')->name('email');

        Route::get('/admin/emails','AdminController@emails')->name('emails');

        Route::delete('/admin/emails/{id}','AdminController@destroyEmail')->name('destroyEmail') ;

        Route::get('/admin/posts','AdminController@posts')->name('posts');

        Route::get('/admin/users','AdminController@users')->name('users');

        Route::get('/admin/categories','AdminController@categories')->name('categories');

        Route::get('/admin/tags','AdminController@tags')->name('tags');

        Route::post('/admin/users/attachrole','UsersController@attacheRole')->name('attachRole') ;

        Route::post('/admin/users/addmembers','UsersController@addMembers')->name('addMembers') ;

        Route::post('/admin/users/fromsupport','UsersController@fromSupport')->name('fromSupport') ;

        Route::post('/admin/users/fromvisitor','UsersController@fromVisitor')->name('fromVisitor') ;

    });





/*------------------------------------------------*/


Route::resource('categories','CategoriesController') ;


Route::resource('hashtag','TagsController') ;


Route::group(['as' => 'posts.'], function()
{
    /* Posts Routes : Start*/

    Route::post('posts','PostsController@store')->name('store') ;

    Route::get('posts/create','PostsController@create')->name('create') ;

    Route::get('{categories}/{slug}','PostsController@show')->name('show') ;

    Route::match(['PATCH','PUT'],'posts/{slug}','PostsController@update')->name('update');

    Route::delete('posts/{slug}','PostsController@destroy')->name('destroy') ;

    Route::get('posts/{slug}/edit','PostsController@edit')->name('edit') ;

    Route::get('posts/publish/{slug}','PostsController@publish')->name('publish') ;

    /* Posts Routs : End*/
});







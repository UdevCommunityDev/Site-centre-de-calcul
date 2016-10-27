<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->text('title') ; 
            $table->longText('content') ;
            $table->text('excerpt') ;
            $table->text('slug') ;

            $table->integer('user_id')->unsigned()->index() ; ;
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade') ;

            $table->integer('category_id')->unsigned()->index() ;
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade') ;

            $table->integer('view')->unsigned()->default(0) ; 

            $table->timestamp('published_at') ;
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('posts');
    }
}

<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfileImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profile_images', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('info_id') ;
            $table->foreign('info_id')->references('id')->on('infos')->onDelete('cascade') ; 
            
            $table->string('path') ;
            $table->string('tn_path') ;
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
        Schema::drop('profile_images');
    }
}

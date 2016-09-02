<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('infos', function (Blueprint $table) {
            $table->increments('id');
            
            $table->integer('user_id')->unsigned() ;
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade') ;
            
            $table->string('first_name')->nullable() ;
            
            $table->string('last_name')->nullable() ;
            
            $table->string('live_in')->nullable() ;
            
            $table->integer('tel')->nullable() ;
            
            $table->string('work')->nullable() ;
            
            $table->string('work_at')->nullable() ;
            
            $table->string('studied_at')->nullable() ;
            
            $table->longText('about_you')->nullable() ;
            
            $table->boolean('public')->nullable()->default(0) ;
            
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
        Schema::drop('infos');
    }
}

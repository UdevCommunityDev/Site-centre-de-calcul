<?php

use Carbon\Carbon;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class CreateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->increments('id');
            $table->text('name'); 
            $table->text('slug'); 
            $table->longText('description') ; 
            $table->timestamps();
        });

        /**
         * create default record for category table
         */

        DB::table('categories')->insert([
            [
                'name'        => 'Divers' ,
                'slug'        => 'divers' ,
                'description' => 'All posts associated with this category don\'t have a specific category' ,
                'created_at'  => Carbon::now() ,
                'updated_at'  => Carbon::now() ,
            ]
        ]) ;

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('categories');
    }
}

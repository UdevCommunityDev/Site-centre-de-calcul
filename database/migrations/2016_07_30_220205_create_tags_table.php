<?php

use Carbon\Carbon;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class CreateTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tags', function (Blueprint $table) {
            $table->increments('id');
            $table->text('name');
            $table->text('slug');
            $table->longText('description');
            $table->timestamps();
        });

        /**
         * create default record for tags table
         */

        DB::table('tags')->insert([
            [
                'name'        => 'non classé' ,
                'slug'        => 'non-classé' ,
                'description' => 'All posts associated with this hashtag don\'t have a specific hashtag' ,
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
        Schema::drop('tags');
        
        Schema::drop('post_tag');
    }
}

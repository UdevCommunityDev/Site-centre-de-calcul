<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post_images extends Model
{
    protected $fillable = ['path','tn_path'] ;
    
    public function post()
    {
        return $this->belongsTo(Post::class) ; 
    }
}

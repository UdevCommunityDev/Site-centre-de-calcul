<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{

    use Helpers ;
    
    
    protected $fillable = ['name' , 'slug' ,'description'] ;

    public function posts()
    {
        return $this->belongsToMany(Post::class)->withTimestamps() ; 
    }

    public function getPost()
    {
        return $this->posts()->published()->paginate(10) ;
    }

    public function otherTags($currentTag)
    {
        return $this->where('slug','!=',$currentTag)->take(6)->get() ;
    }

    public function getPosts()
    {
        return $this->posts()->published()->take(5)->get() ;
    }
}

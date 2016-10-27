<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use Helpers ;

    protected $table = 'categories' ;
    
    
    protected $fillable = ['name','slug','description'] ;


    /**
     * Get all Post associated to the given category
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function posts()
    {
        return $this->hasMany(Post::class) ;
    }

    /**
     * Scope for get the latest posts for the given category
     *
     * @param $query
     * @param $limit
     * @return mixed
     */
    public function scopeLatestPosts($query ,$id , $limit)
    {
        return $this->posts()->published()->where('id' , '!=' , $id)->limit($limit);
    }

    /**
     * Get related posts for a fiven category
     *
     * @param $id
     * @return mixed
     */
    public function relatedPosts($id)
    {
        return $this->latestposts($id,5)->get() ;
    }

    /**
     * Count the number of posts associated to the given category
     *
     * @return mixed
     */
    public function countPosts()
    {
        return $this->posts()->published()->count() ;
    }

    /**
     * Get number for cashed posts
     *
     * @param $number
     * @return mixed
     */
    public function seeAlso($number)
    {
        return $this->countPosts() - $number ; 
    }

    /**
     * Generate the pagination
     *
     * @return mixed
     */
    public function getPost()
    {
        return Post::where('category_id',$this->id)->published()->paginate(10) ;
    }
    public function getPosts()
    {
        return $this->posts()->published()->take(5)->get() ;
    }

    public function otherCategory($currentCategory)
    {
        return Category::where('slug','!=',$currentCategory)->take(6)->get() ;
    }


}

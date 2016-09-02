<?php

namespace App;

use App\Http\Requests\PostRequest;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Jenssegers\Date\Date;

class Post extends Model
{
    protected $fillable = [
        'title',
        'content',
        'slug',
        'excerpt',
        'category_id',
        'published_at'
    ] ; 
    
    protected $dates=['published_at'] ;


    /**
     * Parse published_at to a valid date (Eloquent: Mutators)
     *
     * @param $date
     * @return static
     */
    public function setPublishedAtAttribute($date)
    {
        return $this->attributes['published_at'] =  Carbon::parse($date) ;
    }

    /**
     * Parse published_at to a valid date (Eloquent: Accessors)
     *
     * @param $date
     * @return string
     */
    public function getPublishedAtAttribute($date)
    {
        return Carbon::parse($date)->format('Y-m-d') ;
    }

    /**
     * Generate excerpt attribute (Eloquent: Mutators)
     *
     * @param $excerpt
     * @return string
     */
    public function setExcerptAttribute($excerpt)
    {
        if(empty($excerpt)){

            preg_match("/(<p[^>]*>.*?<\\/p>)/", $this->attributes['content'], $output_array);

            return $this->attributes['excerpt'] = !empty($output_array) ? substr(strip_tags($output_array[1]),0,200) : '' ;
        }else{

            return $this->attributes['excerpt'] = substr($excerpt,0 ,200) ;
        }

    }

    /**
     * Generate slug  attribute (Eloquent: Mutators)
     *
     * @return string
     */
    public function setSlugAttribute()
    {
        return $this->attributes['slug'] = str_slug($this->attributes['title'],'-') ;
    }

    /**
     * Get tag_list attribute (Eloquent: Accessors)
     *
     * @return mixed
     */
    public function getTagListAttribute()
    {
        return $this->tags->lists('id')->all() ;
    }


    /**
     * Query scope for published posts (Eloquent: Query scope)
     *
     * @param $query
     * @return mixed
     */
    public function scopePublished($query)
    {
        return $query->where('published_at' ,'<=',Carbon::now())->latest('published_at') ;
    }

    /**
     * Query scope for unpublished posts (Eloquent: Query scope)
     *
     * @param $query
     * @return mixed
     */
    public function scopeUnPublished($query)
    {
        return $query->where('published_at' ,'>',Carbon::now())->orderBy('published_at') ;
    }

    /**
     * Query scope for get limits post  posts (Eloquent: Query scope)
     *
     * @param $query
     * @param $limit
     * @return mixed
     */
    public function scopeLimit($query, $limit)
    {
        return $query->take($limit) ;
    }

    /**
     * Get the user who create the post  (Eloquent: Relationships)
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class) ;
    }

    /**
     * Get the category for a given post (Eloquent: Relationships)
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category()
    {
        return $this->belongsTo(Category::class) ;
    }

    /**
     * Get the associate tag for a given post (Eloquent: Relationships)
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function tags()
    {
        return $this->belongsToMany(Tag::class)->withTimestamps() ;
    }

    public function photo()
    {
        return $this->hasOne(Post_images::class) ;
    }

    /**
     * Make pageView system
     *
     * @param $post
     * @param $ip
     * @internal param $id
     */
    public function seenBy($post , $ip)
    {
        if(!$this->ifSeenBy($ip,$post->id)){

            DB::table('post_view')->insert([
                'post_id' => $post->id,
                'ip' => $ip,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]) ;

            $post->increment('view') ;
        }
    }
    /**
     * Check if the visitor see a given post  
     *
     * @param $ip
     * @param $id
     * @return mixed
     */
    private function ifSeenBy($ip, $id)
    {
        return DB::table('post_view')->where([
            ['post_id' ,"=",$id],
            ['ip' ,"=",$ip]
        ])->exists() ;
    }
    
    
    /**
     * Get the precedent post  (Helpers)
     *
     * @return bool
     */
    public function prec()
    {
        $record = $this->where([
            ['id' , '<' , $this->id],
            ['category_id' , '=' , $this->category_id]
        ]);
        return $record->exists() ?  $record->orderBy('id','Desc')->published()->first() : false ;
    }

    /**
     * Get the next post  (Helpers)
     *
     * @return bool
     */
    public function next()
    {
        $record = $this->where([
            ['id' , '>' , $this->id],
            ['category_id' , '=' , $this->category_id]
        ]) ;
        return $record->exists() ?  $record->orderBy('id')->published()->first() : false ;
    }

    /**
     * Get humans format for published_at attribute (Helpers)
     * 
     * @return string
     */
    public function publishedAt()
    {
        return Date::parse($this->published_at)->format('j F Y') ;
    }

    /**
     * Get recent posts for AppServiceProvider
     * 
     * @return mixed
     */
    public static function recentPost()
    {
        return self::latest('published_at')->published()->take(6)->get() ;
    }

    /**
     * Get Popular posts for AppServiceProvider
     * 
     * @return mixed
     */
    public static function popularPost()
    {
         return self::orderBy('view','desc')->published()->take(6)->get();
    }

    /**
     * Get similar posts for a given tag list  
     * 
     * @param $id
     * @return mixed
     */
    public function similarPosts($id)
    {
        $ids = $this->tags()->lists('id') ;

        $posts = Post::where('id' ,'!=' ,$id)->whereHas('tags',function ($q) use($ids){
            
           $q->whereIn('id',$ids)->orderBy('published_at','desc')->groupBy('tags.name');
            
        })->published()->take(6)->get();

        return $posts  ;
    }
    
}





































































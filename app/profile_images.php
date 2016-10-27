<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class profile_images extends Model
{
    use Helpers ;
    
    protected $fillable = ['path','tn_path'] ;

    public function info()
    {
        return $this->belongsTo(Info::class) ;
    }
}

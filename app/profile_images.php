<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class profile_images extends Model
{
    protected $fillable = ['path','tn_path'] ;

    public function info()
    {
        return $this->belongsTo(Info::class) ;
    }
}

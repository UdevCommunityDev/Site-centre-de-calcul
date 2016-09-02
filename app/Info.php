<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Info extends Model
{
    protected $fillable = [
        'first_name' ,
        'last_name',
        'live_in',
        'work',
        'work_at',
        'studied_at',
        'tel',
        'about_you',
        'public'
    ];
    public function user()
    {
        return $this->belongsTo(User::class) ; 
    }
    public function pic()
    {
        return $this->hasOne(profile_images::class) ;
    }
}

<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Zizaco\Entrust\Traits\EntrustUserTrait;

class User extends Authenticatable
{
    use EntrustUserTrait;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];


    public function posts()
    {
        return $this->hasMany(Post::class) ;
    }

    public function info()
    {
        return $this->hasOne(Info::class) ; 
    }

    public function getUsersByRole($role)
    {
        return $this->whereHas('roles' , function ($query)use($role) {

            $query->where('name', ucfirst($role));

        })->paginate(5,['*'],$role.'_p');

    }

    public function getInfo($label ,$info)
    {
        return !empty($this->info->$info) ? "<div class=\"info-area\"> <strong>".$label."<span class='info'> ".$this->info->$info."</span></strong></div>" : '' ;
    }
    
    
}

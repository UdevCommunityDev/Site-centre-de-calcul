<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Email extends Model
{
    protected $fillable = ['name','from','to','subject','email_content'] ;

    public function excerpt()
    {
        return substr($this->email_content,0,87) ;
    }
}

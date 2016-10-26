<?php
/**
 * Created by PhpStorm.
 * User: na3im
 * Date: 25/10/2016
 * Time: 22:35
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

trait Helpers
{
    public function checkForExistence($columns,$value)
    {
        if(
            is_array($columns)&&
            is_array($value)&&
            count($columns) ==
            count($value)
        ){
            $data = [] ;

            foreach ($columns as $col){
                $i = 0 ;
                $data[] =  [$col , '=' ,$value[$i]] ;
                $i++ ;
            }

            return $this->where($data)->exists() ;

        }else{

            return $this->where($columns,$value)->exists() ;

        }

    }

    public function lastUpdate()
    {
        return  ($this->updated_at->timestamp) > ($this->created_at->addMinute()->timestamp)  ;
    }
}
<?php namespace App;

use Zizaco\Entrust\EntrustPermission;

class Permission extends EntrustPermission
{
    protected $name ;
    protected $display_name ;
    protected $description ;
}
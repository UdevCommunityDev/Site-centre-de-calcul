<?php

namespace App\Listeners;

use App\Events\AttachUser;
use App\Role;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class UserRolesAttach
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  AttachUser  $event
     * @return void
     */
    public function handle(AttachUser $event)
    {
        if($event->ifOwner){

            $roles = Role::all() ;

            $event->user->attachRoles($roles);
            
        }else{
            
            $member = Role::where(['name' => 'Member'])->get()->first(); ;

            $event->user->attachRole($member);

        }


        
    }
}

<?php

namespace App\Listeners;

use App\Events\GenerateRoles;
use App\Role;
use App\User;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class GeneratingRoles
{
    /**
     * Create the event listener.
     *
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  GenerateRoles  $event
     * @return void
     */
    public function handle(GenerateRoles $event)
    {
        $owner = new Role();
        $owner->name = 'Owner';
        $owner->description = 'Owner have access to all models such as categories,tags,users,posts,emails and general.';
        $owner->save();

        $admin = new Role();
        $admin->name = 'Admin';
        $admin->description = 'Admin can only add new category or hashtag or posts.';
        $admin->save();

        $editor = new Role();
        $editor->name = 'Editor';
        $editor->description = 'Editor can add and manage his own articles.';
        $editor->save();

        $admin = new Role();
        $admin->name = 'Member';
        $admin->description = 'Member is a basic role for all new member in UCI';
        $admin->save();
    }
}

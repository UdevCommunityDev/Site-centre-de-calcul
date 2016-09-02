<?php

namespace App\Providers;

use App\Events\AttachUser;
use App\Events\GenerateRoles;
use App\Events\RegisterVisitor;
use App\Listeners\GeneratingRoles;
use App\Listeners\RegisterVisitorConfirmation;
use App\Listeners\UserRolesAttach;
use Illuminate\Contracts\Events\Dispatcher as DispatcherContract;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        RegisterVisitor::class => [
            RegisterVisitorConfirmation::class,
        ],
        AttachUser::class => [
            UserRolesAttach::class,
        ],
        GenerateRoles::class => [
            GeneratingRoles::class,
        ],

    ];

    /**
     * Register any other events for your application.
     *
     * @param  \Illuminate\Contracts\Events\Dispatcher  $events
     * @return void
     */
    public function boot(DispatcherContract $events)
    {
        parent::boot($events);

        //
    }
}

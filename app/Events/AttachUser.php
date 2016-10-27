<?php

namespace App\Events;

use App\Events\Event;
use App\User;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class AttachUser extends Event
{
    use SerializesModels;
    /**
     * @var User
     */
    public $user;
    /**
     * @var
     */
    public $ifOwner;

    /**
     * Create a new event instance.
     *
     * @param User $user
     * @param  $ifOwner
     */
    public function __construct(User $user,$ifOwner)
    {
        //
        $this->user = $user;
        
        $this->ifOwner = $ifOwner;
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return [];
    }
}

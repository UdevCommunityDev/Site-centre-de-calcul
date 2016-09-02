<?php

namespace App\Listeners;

use App\Events\RegisterVisitor;
use App\Post;
use Illuminate\Http\Request;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class RegisterVisitorConfirmation
{
    protected $post;
    /**
     * @var Request
     */
    private $request;

    /**
     * Create the event listener.
     *
     * @param Post $post
     * @param Request $request
     */
    public function __construct(Post $post,Request $request)
    {
        $this->post = $post ;

        $this->request = $request;
    }

    /**
     * Handle the event.
     *
     * @param  RegisterVisitor  $event
     * @return void
     */
    public function handle(RegisterVisitor $event)
    {
        $ip = $this->request->ip() ;

        $id = $event->post->id ;

        $this->post->seenBy($event->post, $ip) ;
    }
}

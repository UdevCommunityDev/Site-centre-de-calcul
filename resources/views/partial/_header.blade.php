
<div class="header--trigger-box" id="header--trigger-box">
    <span class="trigger"></span>
</div>
<header class="site-header">

    <nav class="navbar--secondary">
        <div class="nav-left">
            <a href="{{url('/')}}"  class="header--logo">
                <i class="c-l-show icon icon-logo icon-m"></i><i class="c-l-hide icon icon-s-logo icon-s"></i>
            </a>
        </div>
        <div id="navbar--secondary" class="nav-right">
            <a href="{{url('/home')}}" id="home" class="item">Acceuil</a>
            <a href="{{url('/blog')}}"  id="blog" class="item">Blog</a>
            <a href="{{url('/join')}}"  id="join" class="item">Inscription</a>
            @if(Auth::check())
                <a href="{{url("/profile/$user->id")}}"  id="contact" class="item">{{$user->name}}</a>
            @endif
            <span id="more-items-trigger" class="more-items-trigger" ></span>
            <div id="more-items" class="more-items">
                @if(Auth::check())
                    @if($user->hasRole('Editor'))
                        <a href="#" id="setting-dropdown" class="item">Setting</a>
                        <div class="item-container" id="item-container">
                            @if($user->hasRole('Owner'))
                                <a href="{{action("AdminController@users")}}" class="item">Users</a>
                                <a href="{{action("AdminController@emails")}}" class="item">Emails</a>
                            @endif
                            @if($user->hasRole('Admin'))
                                <a href="{{action("AdminController@categories")}}" class="item">Categories</a>
                                <a href="{{action("AdminController@tags")}}" class="item">Tags</a>
                            @endif
                            @if($user->hasRole('Editor'))
                                <a href="{{action("AdminController@posts")}}" class="item">Posts</a>
                            @endif
                        </div>
                    @endif
                    <a href="{{url("/logout")}}"  id="contact" class="item">Log Out</a>
                @endif

                 {{-- Here you can add more items for the navigation bar --}}

            </div>

        </div>
    </nav>
</header>

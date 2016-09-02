<div class="portion">
    <div class="row">
        <div class="c-xs-9 c-xs-center related-post">
            <div class="container">
                <h3 class="category-name">Articles similaire </h3>
                @foreach($post->similarPosts($post->id) as $p)
                    <a href="{{action('PostsController@show',[$p->category->slug,$p->slug])}}" class="c-xs-12 item">
                        <div class="c-xs-4 item-pic">
                            <img src="{{asset($p->photo->tn_path)}}" alt="{{$p->title}}">
                        </div>
                        <div class="c-xs-8">
                            <h4 class="c-xs-12 item-title">{{$p->title}}</h4>
                        </div>
                    </a>
                @endforeach
            </div>
        </div>
    </div>
</div>


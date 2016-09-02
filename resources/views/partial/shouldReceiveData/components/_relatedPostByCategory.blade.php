<div class="portion">
    <div class="row">
        <div class="c-xs-9 c-xs-center related-post">
            <div class="container">
                <h3 class="category-name">Voir également</h3>
                @foreach($category->relatedPosts($post->id) as $post)
                    <a href="{{action('PostsController@show',[$post->category->slug,$post->slug])}}" class="c-xs-12 item">
                        <div class="c-xs-4 item-pic">
                            <img src="{{asset($post->photo->tn_path)}}" alt="{{$post->title}}">
                        </div>
                        <div class="c-xs-8 item-content">
                            <span  class="item-date">{{$post->publishedAt}}</span>
                            <h5 class="c-xs-12 item-title">
                                {{$post->title}}
                            </h5>
                        </div>
                    </a>
                @endforeach
                @unless($category->countPosts() <= 5)
                    <div class="c-xs-12 see-more">
                        <a href="{{action('CategoriesController@show',[$category->slug])}}">voir plus...({{$category->seeAlso(5)}})</a>
                    </div>
                @endunless
            </div>
        </div>
    </div>
</div>
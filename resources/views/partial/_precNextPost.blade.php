@if($post->prec())
    <a href="{{action('PostsController@show',[$post->category->slug, $post->prec()->slug])}}" class="post-other-prec">« {{$post->prec()->title}}</a>
@endif
@if($post->next())
    <a href="{{action('PostsController@show',[$post->category->slug, $post->next()->slug])}}" class="post-other-next">{{$post->next()->title}} »</a>
@endif
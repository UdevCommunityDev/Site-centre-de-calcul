<div class="portion">
    <div class="row">
        <div class="c-xs-9 c-xs-center related-category">
            <div class="container">
                @foreach($tag->otherTags($tag->slug) as $t)
                    <h3 class="category-name">{{link_to_action('TagsController@show','#'.$t->name,[$t->slug])}}</h3>
                    @if(!$t->getPosts()->isEmpty())
                        <ul class="c-xs-12 item">
                            @foreach($t->getPosts() as $p)
                                <li> {{link_to_route('posts.show',$p->title,[$p->category->slug,$p->slug],['class'=>'post-title'])}}</li>
                            @endforeach
                        </ul>
                    @endif
                @endforeach
            </div>
        </div>
    </div>
</div>
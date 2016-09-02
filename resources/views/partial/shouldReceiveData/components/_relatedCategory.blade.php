<div class="portion">
    <div class="row">
        <div class="c-xs-9 c-xs-center related-category">
            <div class="container">
                @foreach($category->otherCategory($category->slug) as $category)
                    <h3 class="category-name">{{link_to_action('CategoriesController@show',$category->name,[$category->slug])}}</h3>
                    @if(!$category->getPosts()->isEmpty())
                        <ul class="c-xs-12 item">
                            @foreach($category->getPosts() as $p)
                                <li> {{link_to_route('posts.show',$p->title,[$category->slug,$p->slug],['class'=>'post-title'])}}</li>
                            @endforeach
                        </ul>
                    @endif
                @endforeach
            </div>
        </div>
    </div>
</div>
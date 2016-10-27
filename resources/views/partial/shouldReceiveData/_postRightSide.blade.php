@if(!$category->relatedPosts($post->id)->isEmpty())
        @include('partial.shouldReceiveData.components._relatedPostByCategory')
@endif

@if(!$post->similarPosts($post->id)->isEmpty())
        @include('partial.shouldReceiveData.components._relatedPostByTag')
@endif
@if(!$tag->otherTags($tag->slug)->isEmpty())
        @include('partial.shouldReceiveData.components._relatedTag')
@endif
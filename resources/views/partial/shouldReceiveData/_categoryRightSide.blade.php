@if(!$category->otherCategory($category->slug)->isEmpty())
        @include('partial.shouldReceiveData.components._relatedCategory')
@endif
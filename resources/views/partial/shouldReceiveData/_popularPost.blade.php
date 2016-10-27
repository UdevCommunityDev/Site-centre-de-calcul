@if($popularPosts->count() > 0)
       <div class="portion">
           <div class="row">
               <div class="container">
                   <div class="row">
                       <h2 class="popular-title">Articles Populaires :</h2>
                   </div>
                   @foreach($popularPosts as $post)
                       <div class="c-xs-3 c-m-2 item ">
                           <a href="{{route('posts.show',[$post->category->slug,$post->slug])}}" class="item-pic">
                               <img src="{{asset($post->photo->tn_path)}}" alt="{{$post->title}}">
                           </a>
                           <h3 class="item-title">
                               <a href="{{route('posts.show',[$post->category->slug,$post->slug])}}">{{$post->title}}</a>
                           </h3>
                           <span class="item-date">{{$post->publishedAt()}}</span>
                       </div>
                   @endforeach
               </div>
           </div>
       </div>
@endif
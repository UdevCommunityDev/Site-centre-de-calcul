@extends('outputs._adminPageOutPut')

@section('page')
     Articles
@stop

@section('body')
     <section class="section model-lists-section">
         <div class="row">
             <div class="container">
                <div class="portion">
                    <div class="row">
                        <h2 class="model-title">Posts</h2>
                    </div>
                </div>
                 <div class="portion">
                     <div class="row posts-table">
                         <div class="row">
                             <h3 class="sub-title published">Published ({{$npub}})</h3>
                             {{link_to_action('PostsController@create','Add Post',[],['class' => 'btn btn-success right add-post-btn'])}}
                             <hr>
                             <table class="c-xs-12">
                                 <thead class="c-xs-12">
                                 <tr class="c-xs-12">
                                     <th class="c-xs-3">Title</th>
                                     <th class="c-xs-2">Category</th>
                                     <th class="c-xs-2">Author</th>
                                     <th class="c-xs-2">Published At</th>
                                     <th class="c-xs-3">Action</th>
                                 </tr>
                                 </thead>
                                 <tbody class="c-xs-12">
                                 @foreach($published as $post)
                                     <tr class="c-xs-12">
                                         <td class="c-xs-3">{{link_to_action('PostsController@show',$post->title,[$post->category->slug,$post->slug],['class' =>'post-title'])}}</td>
                                         <td class="c-xs-2">{{link_to_action('CategoriesController@show',$post->category->name,[$post->category->slug],['class' =>'post-category'])}}</td>
                                         <td class="c-xs-2"><a href="" class="post-author">{{$post->user->name}}</a></td>
                                         <td class="c-xs-2">
                                             <a href="" class="post-published-at">{{$post->publishedAt()}}</a>
                                             <br>
                                             @if($post->lastUpdate())
                                                 <span class="last-update">last update ({{$post->updated_at}})</span>
                                             @endif
                                         </td>
                                         <td class="c-xs-3">
                                             @can('alter-post' ,$post)
                                                 {!! Form::open(['method' => 'DELETE' , 'action' =>['PostsController@destroy',$post->slug] , 'class' => 'form']) !!}
                                                 {{link_to_route('posts.edit','edit',[$post->slug],['class' => 'post-edit'])}}
                                                 <div class="f-submit f-danger">
                                                     {!! Form::submit('delete',['id'=> 'delete' ,'class' => 'f-btn-submit']) !!}
                                                 </div>
                                                 {!! Form::close() !!}
                                             @else
                                                No action available
                                             @endcan
                                         </td>
                                     </tr>
                                 @endforeach
                                 </tbody>
                             </table>
                         </div>
                         <div class="row">
                             <hr>
                             {{$published->links()}}
                         </div>
                     </div>
                 </div>
                 <div class="portion">
                     <div class="row posts-table">
                         <div class="row">
                             <h3 class="sub-title unpublished">Unpublished ({{$nunpub}})</h3>
                             <hr>
                             <table class="c-xs-12">
                                 <thead class="c-xs-12">
                                 <tr class="c-xs-12">
                                     <th class="c-xs-3">Title</th>
                                     <th class="c-xs-2">Category</th>
                                     <th class="c-xs-2">Author</th>
                                     <th class="c-xs-2">Published At</th>
                                     <th class="c-xs-3">Action</th>
                                 </tr>
                                 </thead>
                                 <tbody class="c-xs-12">
                                 @foreach($unpublished as $post)
                                     <tr class="c-xs-12">
                                         <td class="c-xs-3">{{link_to_action('PostsController@show',$post->title,[$post->category->slug,$post->slug],['class' =>'post-title'])}}</td>
                                         <td class="c-xs-2">{{link_to_action('CategoriesController@show',$post->category->name,[$post->category->slug],['class' =>'post-category'])}}</td>
                                         <td class="c-xs-2"><a href="" class="post-author">{{$post->user->name}}</a></td>
                                         <td class="c-xs-2">
                                             <a href="" class="post-published-at">{{$post->publishedAt()}}</a>
                                             <br>
                                             @if( $post->lastUpdate())
                                                 <span class="last-update">last update ({{$post->updated_at}})</span>
                                             @endif
                                         </td>
                                         <td class="c-xs-3">
                                             @can('alter-post' ,$post)
                                                 {!! Form::open(['method' => 'DELETE' , 'action' =>['PostsController@destroy',$post->slug] , 'class' => 'form']) !!}
                                                 {{link_to_route('posts.edit','edit',[$post->slug],['class' => 'post-edit'])}}
                                                 {{link_to_route('posts.publish','publish',[$post->slug],['class' => 'publish-post'])}}
                                                 <div class="f-submit f-danger">
                                                     {!! Form::submit('delete',['id'=> 'delete' ,'class' => 'f-btn-submit']) !!}
                                                 </div>
                                                 {!! Form::close() !!}
                                             @else
                                                 No action available
                                             @endcan
                                         </td>
                                     </tr>
                                 @endforeach
                                 </tbody>
                             </table>
                         </div>
                         <div class="row">
                             <hr>
                             {{$unpublished->links()}}
                         </div>
                     </div>

                 </div>

             </div>
         </div>
     </section>
@stop
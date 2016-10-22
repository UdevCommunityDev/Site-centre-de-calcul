@extends('outputs._adminPageOutPut')

@section('page')
    Tags
@stop

@section('body')
    <section class="section model-lists-section">
        <div class="row">
            <div class="container">
                <div class="portion">
                    <div class="row">
                        <h2 class="model-title">Tags</h2>
                    </div>
                </div>
                <div class="c-xs-12 c-s-6 p">
                    <div class="portion">
                        <div class="row add-tag">
                            <div class="row">
                                <h4> Add Tags</h4>
                                <div class="c-xs-12">
                                    {!! Form::open(['action' =>'TagsController@store' , 'class' => 'form']) !!}
                                    @include('partial._tagsForm',['submitText' => 'Ajouter'])
                                    {!! Form::close() !!}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="c-xs-12 p">
                    <div class="portion">
                        <div class="row tags-table">
                            <div class="row">
                                <table class="c-xs-12">
                                    <thead class="c-xs-12">
                                    <tr class="c-xs-12">
                                        <th class="c-xs-3">name</th>
                                        <th class="c-xs-3">Description</th>
                                        <th class="c-xs-3">Associate Posts</th>
                                        <th class="c-xs-3">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody class="c-xs-12">
                                    @foreach($tags as $tag)
                                        <tr class="c-xs-12">
                                            <td class="c-xs-3">
                                                {{link_to_action('TagsController@show','#'.$tag->name,[$tag->slug],['class' =>'tag-name'])}}
                                                <br>
                                                @if( $tag->lastUpdate())
                                                    <span class="last-update">last update ({{$tag->updated_at}})</span>
                                                @endif
                                            </td>
                                            <td class="c-xs-3">
                                                <p>
                                                    @if(!empty($tag->description))
                                                        {{$tag->description}}
                                                    @else
                                                        No Description...{{link_to_action('TagsController@edit','Add',[$tag->slug],['class' =>'tag-description'])}}
                                                    @endif
                                                </p>
                                            </td>
                                            <td class="c-xs-3">
                                                {{link_to_action('TagsController@show',$tag->posts()->count(),[$tag->slug],['class' =>'tag-associate'])}}
                                            </td>
                                            <td class="c-xs-3">
                                                @if($admin)
                                                    @if($tag->slug == 'non-classé')
                                                        No action available
                                                    @else
                                                        {!! Form::open(['method' => 'DELETE' , 'action' =>['TagsController@destroy',$tag->slug] , 'class' => 'form']) !!}
                                                        {{link_to_route('hashtag.edit','edit',[$tag->slug],['class' => 'tag-edit'])}}
                                                        <div class="f-submit f-danger">
                                                            {!! Form::submit('delete',['id'=> 'delete' ,'class' => 'f-btn-submit']) !!}
                                                        </div>
                                                        {!! Form::close() !!}
                                                    @endif
                                                @else
                                                    No action available
                                                @endif
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                            <div class="row">
                                <hr>
                                {{$tags->links()}}
                            </div>
                        </div>
                    </div>
                </div>





            </div>
        </div>
    </section>
@stop
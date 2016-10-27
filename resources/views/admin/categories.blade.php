@extends('outputs._adminPageOutPut')

@section('page')
    Categories
@stop

@section('body')
    <section class="section model-lists-section">
        <div class="row">
            <div class="container">
                <div class="portion">
                    <div class="row">
                        <h2 class="model-title">Categories</h2>
                    </div>
                </div>
                <div class="c-xs-12 c-s-6 p">
                    <div class="portion">
                        <div class="row add-category">
                            <div class="row">
                                <h4> Add Categories</h4>
                                <div class="c-xs-12">
                                    {!! Form::model($category = new \App\Category() ,['action' =>'CategoriesController@store' , 'class' => 'form']) !!}
                                    @include('partial._categoriesForm',['submitText' => 'Ajouter'])
                                    {!! Form::close() !!}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="c-xs-12 p">
                    <div class="portion">
                        <div class="row categories-table">
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
                                    @foreach($categories as $category)
                                        <tr class="c-xs-12">
                                            <td class="c-xs-3">
                                                {{link_to_action('CategoriesController@show',$category->name,[$category->slug],['class' =>'category-name'])}}
                                                <br>
                                                @if( $category->lastUpdate())
                                                    <span class="last-update">last update ({{$category->updated_at}})</span>
                                                @endif
                                            </td>
                                            <td class="c-xs-3">
                                                <p>
                                                    @if(!empty($category->description))
                                                        {{$category->description}}
                                                    @else
                                                        No Description...{{link_to_action('CategoriesController@edit','Add',[$category->slug],['class' =>'category-description'])}}
                                                    @endif
                                                </p>
                                            </td>
                                            <td class="c-xs-3">
                                                {{link_to_action('CategoriesController@show',$category->posts()->count(),[$category->slug],['class' =>'category-associate'])}}
                                            </td>
                                            <td class="c-xs-3">
                                               @if($admin)
                                                   @if($category->slug == 'non-classé')
                                                        No action available
                                                    @else
                                                        {!! Form::open(['method' => 'DELETE' , 'action' =>['CategoriesController@destroy',$category->slug] , 'class' => 'form']) !!}
                                                        {{link_to_route('categories.edit','edit',[$category->slug],['class' => 'category-edit'])}}
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
                                {{$categories->links()}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@stop
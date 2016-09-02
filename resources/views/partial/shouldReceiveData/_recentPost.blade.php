@if(count($recentPosts) >= 3)
   <div class="portion">
      <div class="row">
          <header class="c-xs-12 c-s-12 site-content-header">
              <div class="row">
                  <div class="container">
                      <div class="row">
                          <h2 class="recent-title">Articles Récents :</h2>
                      </div>
                      <div class="slide-container">
                        <span id="prev" class="arrows left">
                            <i class="icon icon-left-arrow"></i>
                        </span>
                          <div class="container">
                              <div class="slide-content" id="slide-content">
                                  @foreach($recentPosts as $post)
                                      <div class="c-xs-4 c-m-4 item ">
                                          <a href="{{action('PostsController@show',[$post->category->slug,$post->slug])}}">
                                              <img src="{{asset($post->photo->tn_path)}}" alt="{{$post->title}}">
                                          </a>
                                          <h2 class="item-title">
                                              <a href="{{action('PostsController@show',[$post->category->slug,$post->slug])}}"> {{$post->title}}</a>
                                          </h2>
                                      </div>
                                  @endforeach
                              </div>
                          </div>
                        <span id="next" class="arrows right">
                            <i class="icon icon-right-arrow"></i>
                        </span>
                      </div>
                  </div>
              </div>
          </header>
      </div>
   </div>
@endif
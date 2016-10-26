/**
 * Created by na3im on 27/07/2016.
 */
$(document).ready(function(){
    var body = $('body') ;
    var more_items =  $('#more-items');
    var siteHeader = $('.site-header') ;

    $('#header--trigger-box').click(function(){
        body.toggleClass('with-slider') ;
        more_items.toggleClass('is-active') ;
    });
    $('#site-cache').click(function(){
        body.removeClass('with-slider') ;
    });

    $(window).resize(function () {
        if(body.width() > 760){
            body.removeClass('with-slider');
            more_items.removeClass('is-active');
        }
    })


});
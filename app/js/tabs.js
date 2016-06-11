/**
 * Created by na3im on 09/06/2016.
 */
$( document ).ready(function( $ ) {


    var tabs = $('.tabs') ;
    var contents = $('.intro-section .content') ;
    var items = tabs.find('.item') ;
    var find = function (selector) {

    } ;
   /* var circle = function () {

        $.each(items,function () {
            var i=0;

             return $(this).intreva = window.setInterval(function () {

                var item = items.eq(i);
                var id = item.attr('href');
                item.addClass('is-active').siblings().removeClass('is-active');
                $(id).parent().find('.is-active').stop().fadeOut(300,'linear',function () {
                    $(this).removeClass('is-active') ;
                    $(id).stop().fadeIn(300).addClass('is-active') ;
                });
                i++ ;
                if( i >= items.length ){
                    i = 0 ;
                }
            },3000);


        });

    };
    */
    items.click(function (e) {
        e.preventDefault() ;



        var self = $(this);
        if(self.hasClass('is-active')){
            return false ;
        }else{
            self.parent().find('.is-active').removeClass('is-active') ;
            self.addClass('is-active');
            var id = self.attr('href') ;
            $(id).parent().find('.is-active').stop().fadeOut(300,'linear',function () {
               $(this).removeClass('is-active') ;
                $(id).stop().fadeIn(300).addClass('is-active') ;
            });
        }
         /*var id = $(this).attr('href') ;
        $(id).fadeIn(300) ;*/
    });



});
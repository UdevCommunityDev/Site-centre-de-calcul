$( document ).ready(function( $ ) {
    
    var tabs = $('.tabs') ;
    var contents = $('.intro-section .content') ;
    var items = tabs.find('.item') ;
    
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
    });

   
});
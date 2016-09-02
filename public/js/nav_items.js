/**
 * Created by na3im on 04/08/2016.
 */

$(document).ready(function(){
    var items = $('#navbar--secondary').children('a.item') ;

    var hrefs = window.location.pathname ;

    var href = hrefs.split('/') ;

    for(var i = 0 ; i < items.length ; i++ ){
       var id = items[i].getAttribute('id') ;
       var itemWithSlash = new RegExp('/'+id+'/', "i") ;
       var itemWithOutSlash = new RegExp('/'+id, "i") ;
       if(itemWithSlash.test(hrefs)|| itemWithOutSlash.test(hrefs)){
         $("#"+id).addClass('is-active') ;
       }
    }
    
    var more_items =  $('#more-items');
    var more_items_length =  $('#more-items').children('a.item').length ;

    var more_items_trigger =  $('#more-items-trigger');
    if(more_items_length > 0 ){
        more_items_trigger.addClass("show") ; 
    }
    
    more_items_trigger.click(function () {
        more_items.toggleClass('is-active');
    });
    
    $('.site-content').mouseup(function () {
        more_items.removeClass('is-active') ;
    });

    $('#setting-dropdown').click(function (e) {
        e.preventDefault() ;
        $('#item-container').toggleClass('open') ;
    })
    
    
    
});
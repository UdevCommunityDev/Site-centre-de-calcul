/**
 * Created by na3im on 08/08/2016.
 */
$(document).ready(function(){
    var title = $('#title') ;
    var slug = $('#slug') ;
    title.keyup(function(){
        var title_val = title.val() ;
        slug.parent('.f-group').addClass('is-focused') ;
        slug.val(title_val.trim().replace(/ +/g , '-')) ;
    });
});
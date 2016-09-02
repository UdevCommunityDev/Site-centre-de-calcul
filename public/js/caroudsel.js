/**
 * Created by na3im on 10/08/2016.
 */
$('#slide-content').carouFredSel({
    width: 1180.72 ,
    height: 250 ,
    scroll : 1 ,
    responsive : true ,
    debug : true ,
    items : {
        height : 250,
        visible :{
            min : 1 ,
            max : 3
        }
    },
    prev:{
        button : "#prev",
        key : "left"
    },
    next:{
        button : "#next",
        key : "right"
    },
    auto:{
        pauseOnHover:true,
        easing : "swing"
    }
});

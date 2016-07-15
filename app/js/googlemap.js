

function initialize() {
  var mapProp = {
      center:new google.maps.LatLng(35.7079021,-0.5789864),
      zoom:15,
      mapTypeId:google.maps.MapTypeId.ROADMAP
      };

    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }


window.onload = function () {
  var foundGoogle, img;
  foundGoogle = typeof google === 'object' && typeof google.maps === 'object';
    if (foundGoogle) {
        initialize();
      } else {
        img = new Image();
        img.src = 'screenshot.png';
        document.getElementById('map-canvas').appendChild(img);
      }
}

(function() {
    navigator.geolocation.getCurrentPosition(function success(pos){
        console.log(pos);

        var src = "http://maps.googleapis.com/maps/api/staticmap?center=" + pos.coords.latitude + "," + pos.coords.longitude +"&zoom=17&size=500x500&sensor=false",
        map = document.getElementById('map');
        map.setAttribute('src', src);

    }, function error(data){

    });
}());
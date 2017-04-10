(function () {

    //setting the promise
    var currentLocation = new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                resolve(position);
            },
            function (error) {
                reject(error);
            });
    });

    //taking the coordinates

    function coordinates(position){
        return{
            lat: position.coords.latitude,
            long: position.coords.longitude
        };
    }

    function createMapView(coords) {
        var map = document.getElementById("map");

        var src = "http://maps.googleapis.com/maps/api/staticmap?center=" + 
        coords.lat + "," +
        coords.long + 
        "&zoom=18&size=500x500&sensor=false";

        map.setAttribute("src", src);
    }

    //if not founf

    function locationIsNotFound(error){
        //map.innerText = "The location was not found!";
        errorMessage = document.createElement('div');
        errorMessage.innerText = "Location not found";

        document.body.appendChild(errorMessage);

    }

    //running the promise

    currentLocation
        .then(coordinates)
        .then(createMapView)
        .catch(locationIsNotFound);
}());


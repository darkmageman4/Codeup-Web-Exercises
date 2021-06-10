const token = "pk.eyJ1IjoiZGFya21hZ2VtYW40IiwiYSI6ImNrcHBtdzM2OTAya3oycXB0NjUyd2FwbGQifQ.ZxkFur5nI3aJZ19VNyDMFA"
// const mapbox = "pk.eyJ1IjoiZGFya21hZ2VtYW40IiwiYSI6ImNrcHBuOGFpZDBmbWcycG8zd2c3dmZ3bHcifQ.HqDUwrNGbHgUvPBRaRSzGA"

mapboxgl.accessToken = token;
var map;
initMapbox();

function initMapbox() {
    mapboxgl.accessToken = token;
    map = getMap();

    let marker = setMarker([-80.1918, 25.7617]);
    setMapClickEvent(marker);

    let geocoder = getGeoCoder();
    // setGeoCoderToMap(geocoder);
    setGeoCoderEvent(geocoder, marker);
}

function getMap() {
    return new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/dark-v10",
        center: [-80.1918, 25.7617],
        zoom: 12,
    })
}

// creates marker mapboxgl.Marker set the point , and adds to the mapboggl.Map
function setMarker(point) {
    return new mapboxgl.Marker().setLngLat(point).addTo(map);
}

//Add click event to map with a callback...
function setMapClickEvent(marker) {
    map.on("click", function (event) {
        marker.setLngLat(event.lngLat)
            .addTo(map);
        let point = [event.lngLat.lng, event.lngLat.lat];
        getReverseGeocode(point, marker);
    })
}

function getGeoCoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
}


// missed function
function setGeocoderToMap(geocoder, marker) {
};

function setGeoCoderEvent(geocoder, marker) {
    geocoder.on("results", function (event) {
        console.log(event.results)
        marker.setLngLat(event.result.geometry.coordinates)
        // Let popup = getPopup(event.result.place_name);
        marker.setPopup(getPopup(event.result.place_name));
    })
}

function getPopup(){

}

function getReverseGeocode(point, marker) {
    $.ajax({
        url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${point}.json?access_token=${mapboxgl.accessToken}`,
        success: function (data) {
            marker.setPopup(getPopup(data.features[0].place_name));//this will only execute once the success callback si invoked
            //It guarantees that the response is returned AND successfull before trying to do anything with the expected data
        }
    })
}

















// var map = new mapboxgl.Map({
//     container: "map",
//     style: "mapbox://styles/mapbox/dark-v10",
//     center: [-80.1918, 25.7617],
//     zoom: 12,
// })

//call function to give method and initial pointer
// let marker = setMarker([-80.1918, 25.7617]);
//
// // call addMapEvent after marker has been initially set
// addMapEvent(marker)
//
// //create new geocoder
// let geocoder = setGeoCoder();
// addGeocoderToMap(geocoder)
// addGeocoderEvent(event)
// setPopUp("This is my popup!")
//
// function setGeoCoder() {
//     return new MapboxGeocoder({
//         accessToken: mapboxgl.accessToken,
//         mapboxgl: mapboxgl,
//         marker: false
//
//     })
//
// };
//
// //add geocoder
// function addGeocoderToMap(geocoder) {
//     map.addControl(geocoder);
// }
//
// function addGeocoderEvent() {
//     geocoder.on("result", function (event) {
//         marker.setLngLat(event.result.geometry.coordinates)
//     })
//
// }
//
//
//
// // add event to map that changes location based on user click
// function addMapEvent() {
//     map.on("click", function (e) {
//         console.log(e.lngLat)
//         marker.setLngLat(e.lngLat).addTo(map);
//     })
// }
//
// function setPopUp(textDetails) {
//     let popup = new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`)
//         .addTo(map);
//     marker.setPopup(popup);
// }

//.place_name works
//.name
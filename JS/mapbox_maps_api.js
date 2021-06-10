const token = "pk.eyJ1IjoiZGFya21hZ2VtYW40IiwiYSI6ImNrcHBtdzM2OTAya3oycXB0NjUyd2FwbGQifQ.ZxkFur5nI3aJZ19VNyDMFA"
// const mapbox = "pk.eyJ1IjoiZGFya21hZ2VtYW40IiwiYSI6ImNrcHBuOGFpZDBmbWcycG8zd2c3dmZ3bHcifQ.HqDUwrNGbHgUvPBRaRSzGA"

mapboxgl.accessToken = token;

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    center: [-80.1918, 25.7617],
    zoom: 12,
})
//call function to give method and initial pointer
let marker = setMarker([-80.1918, 25.7617]);

// call addMapEvent after marker has been initially set
addMapEvent(marker)

//create new geocoder
let geocoder = setGeoCoder();
addGeocoderToMap(geocoder)
addGeocoderEvent(event)
setPopUp("This is my popup!")

function setGeoCoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false

    })

};

//add geocoder
function addGeocoderToMap (geocoder){
    map.addControl(geocoder);
}

function addGeocoderEvent(){
    geocoder.on("result", function(event){
        marker.setLngLat(event.result.geometry.coordinates)
    })

}
// creates marker
function setMarker(point) {
    return new mapboxgl.Marker().setLngLat(point).addTo(map);
}

// add event to map that changes location based on user click
function addMapEvent() {
    map.on("click", function (e) {
        console.log(e.lngLat)
        marker.setLngLat(e.lngLat).addTo(map);
    })
}

function setPopUp(textDetails){
    let popup = new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`)
        .addTo(map);
    marker.setPopup(popup);
}


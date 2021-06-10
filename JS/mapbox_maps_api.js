const token = "pk.eyJ1IjoiZGFya21hZ2VtYW40IiwiYSI6ImNrcHBtdzM2OTAya3oycXB0NjUyd2FwbGQifQ.ZxkFur5nI3aJZ19VNyDMFA"
// const mapbox = "pk.eyJ1IjoiZGFya21hZ2VtYW40IiwiYSI6ImNrcHBuOGFpZDBmbWcycG8zd2c3dmZ3bHcifQ.HqDUwrNGbHgUvPBRaRSzGA"

mapboxgl.accessToken = token;

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    center: [-80.24007381597617, 26.155512538141295],
    //[-80.1918, 25.7617],
    zoom: 15,
})

//call function to give method and initial pointer
let marker = setMarker(
    //[-80.1918, 25.7617]);
//  Boobs
    [-80.24007381597617, 26.155512538141295]
)

// call addMapEvent after marker has been initially set
addMapEvent(marker)

//create new geocoder
let geocoder = setGeoCoder();
addGeocoderToMap(geocoder)
addGeocoderEvent(event)
setPopUp("Bobo's Chinese Restaurant")

function setGeoCoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
};

//add geocoder
function addGeocoderToMap(geocoder) {
    map.addControl(geocoder);
}

function addGeocoderEvent() {
    geocoder.on("result", function (event) {
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


function setPopUp(textDetails) {
    let popup = new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`)
        .addTo(map);
    marker.setPopup(popup);

    var bobosInfo = {
        address: "Bobo's",
        popupHTML: "<p>Welcome to Bobo's!</p>"
    }

    var dutchPot = {
        address: "Dutch Pot",
        popupHTML: "<p>Welcome to Dutch Pot!</p>"
    }

    var jjGourment = {
        address: "JJ Gourment",
        popupHTML: "<p>Welcome to JJ's</p>"
    }
};

var geojson = [
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-80.240653, 26.155500],
            description: "JJ Gourment"
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-80.24015428234213, 26.15570514223824],
            description: "Bobo Chinese TakeOut"
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-80.2367902926663, 26.155621372683342],
            description: "The Dutch Pot"
        }
    }
];

var favRest = [
    {
        name: "<p>The Dutch Pot</p>",
        // address: "-80.2367902926663,26.155621372683342",
        address: "-6499A Sunset Strip, Sunrise, FL 33313",

    },
    {
        description: "<p>Bobo's Chinese TakeOut</p>",
        // address: "-80.24015428234213, 26.15570514223824",
        address: "-6839 Sunset Strip, Fort Lauderdale, FL 33313",

    },
    {
        description: "<p>JJ Gourment</p>",
        // address: "-80.240653, 26.155500",
        address: "6937 Sunset Strip, Sunrise, FL 33313",

    }
];


// function placeMarkerAndPopup(info, token, map) {
//     geocode(info.address, token).then(function (coordinates) {
//         console.log(geocode)
//         var popup = new mapboxgl.Popup()
//             .setHTML(info.popupHTML);
//         var marker = new mapboxgl.Marker()
//             .setLngLat(coordinates)
//             .addTo(map)
//             .setPopup(popup);
//         popup.addTo(map);
//     });
// }
//
// placeMarkerAndPopup(setPopUp(), mapboxgl.accessToken, map);

favRest.forEach(function (place) {
    geocode(place.address, token)
        .then(function (location) {
            var marker = new mapboxgl.Marker()
                .setLngLat(location)
                .addTo(map);

            var popup = new mapboxgl.Popup().setHTML(place.description)

            marker.setPopup(popup)
        })
})

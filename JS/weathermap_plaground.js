$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather",
    type: "GET",
    data: {
        // APPID: OPEN_WEATHER_MAP_TOKEN,
        // lat:    29.423017,
        // lon:   -98.48527,
        // units: "imperial",
},
    success: function (data){
        console.log(data)
    }
});

$.ajax("http://api.openweathermap.org/data/2.5/forecast", {
    data: {
        APPID: OPEN_WEATHER_MAP_TOKEN,
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial",
    },
    success: function (data){
        console.log(data)
    }
});

$.get("http://api.openweathermap.org/data/2.5/weather?APPID=" + OPEN_WEATHER_APPID + "&q=San+Antonio,+US");

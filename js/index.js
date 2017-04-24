$(document).ready(function() {
    console.log("redy");
    var units = 'metric';  // set to "imperial" for imperial units.
    var unitChar = 'C';
    function getWeather() {
        $.ajax({
            cache: false,
            url: 'http://api.openweathermap.org/data/2.5/weather?APPID=9dc09ef0f5d2d6b8e00cd03924f371ea&q=gothenburg,se&units=' + units,
            dataType: 'jsonp',
            success: function(weather) {
		console.log("1");
                let currentWeather = weather.weather[0].main//  + ', ' +
                    // weather.weather[0].description;
                let currentTemp = Math.round(weather.main.temp);
                let weatherIcon = weather.weather[0].icon;
                let weatherIconUrl = 'http://openweathermap.org/img/w/' + weatherIcon + '.png';
                $('#debugger').empty().append(currentWeather);
		$('#temp').empty().append(currentTemp + String.fromCharCode(176) + unitChar);
                $('.weatherpic').attr('src', weatherIconUrl);
            }
        });
    }
    $('.reload-button').on('click', function(a) {
        getWeather();
    });

    function changeUnit() {
	$('#switch-text').empty().append(String.fromCharCode(176) + unitChar);
	console.log(units);
	console.log(unitChar);
	if (units[0] == 'm') {
	    units = 'imperial';
	    unitChar = 'F';
	    console.log(unitChar);
	    
	}
	
	else {
	    units = 'metric';
	    unitChar = 'C';
	}
	getWeather()};
    
    $('.switch').on('click', function(a) {
	changeUnit();
    });
        getWeather();
});

function getWeather() {
	function success(pos) {
		var crd = pos.coords;
		loadWeather(crd.latitude +','+crd.longitude);
	};

	function error() {
		loadWeather("Malbork, PL");
	};

	navigator.geolocation.getCurrentPosition(success, error);

}
$(document).ready(function(){
	setInterval(getWeather(), 10000);
});

function loadWeather(location, woeid) {
	day = new Date().getDate();
	poniedzialek = 16-day;
	$.simpleWeather({
		location: location,
		woeid: woeid,
		unit: 'c',
		success: function(weather) {
			city = weather.city;
			temp = weather.forecast[poniedzialek].high+'&deg;';

			$(".location").text(city);
			$(".temperature").html(temp);
			$(".weather").html("W Lany Poniedziałek w "+city+" najwyższą temperaturą będzie "+temp+".")

		},
		error: function(error) {
			$(".error").html('<p>' + error + '</p>');
		}
	});
}

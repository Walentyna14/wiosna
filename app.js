var main = function(){
$("#zajac").mouseenter(ucieczka);
}

$(document).ready(main);

var randomNumber = function(min , max){
	return (min + Math.floor(Math.random() * max));
};

var ucieczka = function(){
	var x = randomNumber(0,500);
	var y = randomNumber(0,500);
	$(this).css("left", x);
	$(this).css("top", y);
}
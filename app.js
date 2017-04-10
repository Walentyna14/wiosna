var main = function(){
	gameSize();
	$("#game").hide();
	$("#game_over").hide();
	$( window ).resize(gameSize);
	$("#rabbit").mouseenter(run);
	$("#rabbit").click(catchRabbit);
	$('button').click(startGame);
	
}//End MAIN
$(document).ready(main);

var randomNumber = function(min , max){
	return (min + Math.floor(Math.random() * max));
};

var documentSize = function(){
	height = $( document ).height();
	width = $( document ).width();
}

var run = function(){
	documentSize();
	var marginX = 0.1*width;
	var x = randomNumber(marginX,0.7*width-130);
	var marginY = 0.1*height;
	var y = randomNumber(marginY,0.7*height-135);
	$(this).css("left", x);
	$(this).css("top", y);
}

var gameSize = function() {
	documentSize();
	$("#game_board").css("height", 0.8*height);
	$("#game_board").css("width", 0.8*width);
	run();
}
var startGame = function(){
	$("#main").hide();
	$("#game_over").hide();
	$("#game").show();
	sec = 0;
	min = "0"+5;
	setInterval(timer, 1000);
}

var catchRabbit = function (){
	$("#game").hide();
	$("#game_over").show();
	$("#lose").hide();
	$("#win").show();
}

var notCatchRabbit = function (){
	$("#game").hide();
	$("#game_over").show();
	$("#win").hide();
}

var timer= function (){
	if (sec == 0)
	{
		sec = 60;
		min--;
	}
	sec--;
	if (sec<10) 
	{
		sec = "0"+sec;
	}
	if (sec==0 && min==0) 
	{
		notCatchRabbit();
	}
	$("#timer").text(min+":"+sec);
}
$(function(){

	// slide ups

	$('#football_stat_options ul').slideUp(0);
	$('#baseball_stat_options ul').slideUp(0);

	// football hover animation

	$('#football_stat_options ul li:nth-of-type(1)').click(function(){
		$('#football_stat_options ul li:nth-of-type(1)').css({"background-color": "#0E76FF", "color": "white", "border-color": "white"});
	});
	$('#football_stat_options ul li:nth-of-type(2)').click(function(){
		$('#football_stat_options ul li:nth-of-type(2)').css({"background-color": "#0E76FF", "color": "white", "border-color": "white"});
	});
	$('#football_stat_options ul li:nth-of-type(3)').click(function(){
		$('#football_stat_options ul li:nth-of-type(3)').css({"background-color": "#0E76FF", "color": "white", "border-color": "white"});
	});
	$('#football_stat_options ul li:nth-of-type(4)').click(function(){
		$('#football_stat_options ul li:nth-of-type(4)').css({"background-color": "#0E76FF", "color": "white", "border-color": "white"});
	});

	// baseball hover animation

	$('#baseball_stat_options ul li:nth-of-type(1)').click(function(){
		$('#baseball_stat_options ul li:nth-of-type(1)').css({"background-color": "#0E76FF", "color": "white", "border-color": "white"});
	});
	$('#baseball_stat_options ul li:nth-of-type(2)').click(function(){
		$('#baseball_stat_options ul li:nth-of-type(2)').css({"background-color": "#0E76FF", "color": "white", "border-color": "white"});
	});
	$('#baseball_stat_options ul li:nth-of-type(3)').click(function(){
		$('#baseball_stat_options ul li:nth-of-type(3)').css({"background-color": "#0E76FF", "color": "white", "border-color": "white"});
	});
	$('#baseball_stat_options ul li:nth-of-type(4)').click(function(){
		$('#baseball_stat_options ul li:nth-of-type(4)').css({"background-color": "#0E76FF", "color": "white", "border-color": "white"});
	});

	$('#sport_options ul li:nth-of-type(1)').click(function(){
		$('#sport_options ul li:nth-of-type(1)').css({"background-color": "#0E76FF", "color": "white", "border-color": "white"});
		$('#football_stat_options ul').slideToggle(800);
	});
	$('#sport_options ul li:nth-of-type(2)').click(function(){
		$('#sport_options ul li:nth-of-type(2)').css({"background-color": "#0E76FF", "color": "white", "border-color": "white"});
		$('#baseball_stat_options ul').slideToggle(800);
	});
	$('#sport_options ul li:nth-of-type(3)').click(function(){
		$('#sport_options ul li:nth-of-type(3)').css({"background-color": "#0E76FF", "color": "white", "border-color": "white"});
	});
	$('#sport_options ul li:nth-of-type(4)').click(function(){
		$('#sport_options ul li:nth-of-type(4)').css({"background-color": "#0E76FF", "color": "white", "border-color": "white"});
	});


});
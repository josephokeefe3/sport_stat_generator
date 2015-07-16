$(function(){

	sessionStorage.num_general_stats = 0;
	sessionStorage.num_goalie_stats = 0;

	$('.choice_button #football_choice').click(function(){
		$('.choice_button div').slideUp(400);
		$('#football_stat_options').delay(400).fadeIn(200);
		$('.choice_button').delay(400).slideUp(400);
		console.log(sessionStorage.num_general_stats);
	});

	$('.choice_button #baseball_choice').click(function(){
		$('.choice_button div').slideUp(500);
		$('#baseball_stat_options').delay(400).fadeIn(200);
		$('.choice_button').delay(400).slideUp(400);
	});

	$('.choice_button #basketball_choice').click(function(){
		$('.choice_button div').slideUp(500);
		$('#basketball_stat_options').delay(400).fadeIn(200);
		$('.choice_button').delay(400).slideUp(400);
	});

	$('.choice_button #soccer_choice').click(function(){
		$('.choice_button div').slideUp(500);
		$('#soccer_stat_options div').delay(540).fadeIn(300);
		$('#stat_options div:first-of-type').delay(540).fadeIn(300);
		$('.choice_button').delay(400).slideUp(400);
	});

	$('#general td').click(function(){
		if ($(this).attr("data-clicked") == 0){
			$(this).css({"color": "white", "background-color": "#0E76FF"});
			$(this).attr("data-clicked", "1");
			sessionStorage.setItem($(this).attr("id"), "true");
			sessionStorage.num_general_stats = String(parseInt(sessionStorage.num_general_stats) + 1);
		} else {
			$(this).css({"color": "black", "background-color": "white"});
			$(this).attr("data-clicked", "0");
			sessionStorage.setItem($(this).attr("id"), "false");
			sessionStorage.num_general_stats = String(parseInt(sessionStorage.num_general_stats) - 1);
		}
		console.log("Number of general stats: " + sessionStorage.num_general_stats);
	});

	$('#goalie td').click(function(){
		if ($(this).attr("data-clicked") == 0){
			$(this).css({"color": "white", "background-color": "#0E76FF"});
			$(this).attr("data-clicked", "1");
			sessionStorage.setItem($(this).attr("id"), "true");
			sessionStorage.num_goalie_stats = String(parseInt(sessionStorage.num_goalie_stats) + 1);
		} else {
			$(this).css({"color": "black", "background-color": "white"});
			$(this).attr("data-clicked", "0");
			sessionStorage.setItem($(this).attr("id"), "false");
			sessionStorage.num_goalie_stats = String(parseInt(sessionStorage.num_goalie_stats) - 1);
		}
		console.log("Number of goalie stats: " + sessionStorage.num_goalie_stats);
	});
});

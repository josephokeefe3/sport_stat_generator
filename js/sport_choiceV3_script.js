$(function(){

	$('.choice_button #football_choice').click(function(){
		$('.choice_button div').slideUp(400);
		$('#football_stat_options').delay(400).fadeIn(200);
		$('.choice_button').delay(400).slideUp(400);
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

	$('td').click(function(){
		if ($(this).attr("data-clicked") == 0){
			$(this).css({"color": "white", "background-color": "#0E76FF"});
			$(this).attr("data-clicked", "1");
		} else {
			$(this).css({"color": "black", "background-color": "white"});
			$(this).attr("data-clicked", "0");
		}
	});
});

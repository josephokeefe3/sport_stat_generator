$(function(){

	$('.choice_button #football_choice').click(function(){
		$('.choice_button div').slideUp(400);
		$('#football_stat_options').delay(400);
	});

	$('.choice_button #baseball_choice').click(function(){
		$('.choice_button div').slideUp(500);
	});

	$('.choice_button #basketball_choice').click(function(){
		$('.choice_button div').slideUp(500);
	});

	$('.choice_button #soccer_choice').click(function(){
		$('.choice_button div').slideUp(500);
	});
});

$(document).ready(function(){

  var included_general_stats_array = sessionStorage.included_general_stats_global.split(",");
  var included_goalie_stats_array = sessionStorage.included_goalie_stats_global.split(",");
  var num_general_stats = parseInt(sessionStorage.num_general_stats);
  var num_goalie_stats = parseInt(sessionStorage.num_goalie_stats);

  console.log(included_general_stats_array);
  console.log(included_goalie_stats_array);

  for (i = 0; i < num_general_stats; i++){
    $('body > div.wrapper > div.general_stat_table > table > thead > tr').append("<td id='" + included_general_stats_array[i] + "'>" + included_general_stats_array[i] + "</td>");
    $('body > div.wrapper > div.general_stat_table > table > tbody > tr').append("<td id='" + included_general_stats_array[i] + "'><input type='text' class='input_box' placeholder='" + included_general_stats_array[i] + "'</td>");
  }

  $('#field_players_add').click(function(){
    $('body > div.wrapper > div.general_stat_table > table > tbody').append("<tr><td><input type='text' class='input_box' placeholder='Player'></td></tr>");
    for (y = 0; y < num_general_stats; y++){
    $('body > div.wrapper > div.general_stat_table > table > tbody > tr:last-of-type').append("<td id='" + included_general_stats_array[y] + "'><input type='text' class='input_box' placeholder='" + included_general_stats_array[y] + "'</td>");
    console.log(y);
  }
  });

  $('#field_players_sub').click(function(){
    $('tr:last-of-type', 'body > div.wrapper > div.general_stat_table > table > tbody').remove();
  });

    for (i = 0; i < num_goalie_stats; i++){
    $('body > div.wrapper > div.goalie_stat_table > table > thead > tr').append("<td id='" + included_goalie_stats_array[i] + "'>" + included_goalie_stats_array[i] + "</td>");
    $('body > div.wrapper > div.goalie_stat_table > table > tbody > tr').append("<td id='" + included_goalie_stats_array[i] + "'><input type='text' class='input_box' placeholder='" + included_goalie_stats_array[i] + "'</td>");
  }

  $('#goalie_players_add').click(function(){
    $('body > div.wrapper > div.goalie_stat_table > table > tbody').append("<tr><td><input type='text' class='input_box' placeholder='Player'></td></tr>");
    for (y = 0; y < num_goalie_stats; y++){
    $('body > div.wrapper > div.goalie_stat_table > table > tbody > tr:last-of-type').append("<td id='" + included_goalie_stats_array[y] + "'><input type='text' class='input_box' placeholder='" + included_goalie_stats_array[y] + "'</td>");
    console.log(y);
  }
  });

  $('#goalie_players_sub').click(function(){
    $('tr:last-of-type', 'body > div.wrapper > div.goalie_stat_table > table > tbody').remove();
  });

  $('#nav_wrapper ul li:last-of-type').click(function(){
    if ($(this).attr('class') !== "active"){
      $(this).addClass('active');
      $('#nav_wrapper ul li:first-of-type').removeClass('active');
      $('.general_stat_table').fadeOut(100);
      $('.goalie_stat_table').delay(100).fadeIn(100);

    }
    else {
      return;
    }
  });

  $('#nav_wrapper ul li:first-of-type').click(function(){
    if ($(this).attr('class') !== "active"){
      $(this).addClass('active');
      $('#nav_wrapper ul li:last-of-type').removeClass('active');
      $('.general_stat_table').delay(100).fadeIn(100);
      $('.goalie_stat_table').fadeOut(100);
    }
    else {
      return;
    }
  });







  

});
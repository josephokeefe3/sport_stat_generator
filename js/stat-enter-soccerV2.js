$(document).ready(function(){

  var included_general_stats_array = sessionStorage.included_general_stats_global.split(",");
  var included_goalie_stats_array = sessionStorage.included_goalie_stats_global.split(",");
  var num_general_stats = parseInt(sessionStorage.num_general_stats);
  var num_goalie_stats = parseInt(sessionStorage.num_goalie_stats);

  console.log(included_general_stats_array);
  console.log(included_goalie_stats_array);

  for (i = 0; i < num_general_stats; i++){
    $('#nav_wrapper > div.general_stat_table > table > thead > tr').append("<td id='" + included_general_stats_array[i] + "'>" + included_general_stats_array[i] + "</td>");
    $('#nav_wrapper > div.general_stat_table > table > tbody > tr').append("<td id='" + included_general_stats_array[i] + "'><input type='text' class='input_box' placeholder='" + included_general_stats_array[i] + "'</td>");
  }

  $('#field_players_add').click(function(){
    $('#nav_wrapper > div.general_stat_table > table > tbody').append("<tr><td><input type='text' class='input_box' placeholder='Player'></td></tr>");
    for (y = 0; y < num_general_stats; y++){
    $('#nav_wrapper > div.general_stat_table > table > tbody > tr:last-of-type').append("<td id='" + included_general_stats_array[y] + "'><input type='text' class='input_box' placeholder='" + included_general_stats_array[y] + "'</td>");
    console.log(y);
    }
  });

});
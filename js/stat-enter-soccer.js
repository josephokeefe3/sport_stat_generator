$(document).ready(function(){

  included_general_stats_array = sessionStorage.included_general_stats_global.split(",");
  included_goalie_stats_array = sessionStorage.included_goalie_stats_global.split(",");

  console.log(included_general_stats_array);
  console.log(included_goalie_stats_array);

  $('body > div.wrapper > ul > li:nth-child(1)').click(function(){
    $('#field-players').addClass('open');
    $('#goalies').removeClass('open');
    $('body > div.wrapper > ul > li:nth-child(1)').addClass('active');
    $('body > div.wrapper > ul > li:nth-child(2)').removeClass('active');
  });
  $('body > div.wrapper > ul > li:nth-child(2)').click(function(){
    $('#goalies').addClass('open');
    $('#field-players').removeClass('open');
    $('body > div.wrapper > ul > li:nth-child(2)').addClass('active');
    $('body > div.wrapper > ul > li:nth-child(1)').removeClass('active');
  });

  $('#field-players-stat > tbody > tr.stat-row').each(function(index){
      $(this).append('<td type="text" class="stat"'> + included_general_stats_array[index] + "</td>");
   });

  var stat_row = '<tr class="stat_row"><td> <input type="text" class="stat"> </td><td> <input type="text" class="stat"> </td> <td> <input type="text" class="stat">  </td><td> <input type="text" class="stat">  </td><td> <input type="text" class="stat">  </td><td> <input type="text" class="stat">  </td><td> <input type="text" class="stat">  </td></tr>';

  var fp_rows = 1

  $('#field-players-add').click(function(){
    $('#field-players-stat').append(stat_row);
    $fp_rows = fp_rows+1;
    $console.log(fp_rows);
  });

  $('#goalies-add').click(function(){
    $('#goalies-stat').append(stat_row);
  });

  $('#field-players-sub').click(function(){
    $('.stat_row:last-child' ,'#field-players-stat').remove();
  });

  $('#goalies-sub').click(function(){
    $('.stat_row:last-child', '#goalies-stat').remove();
  });

  $('#done').click(function(){
  });

});
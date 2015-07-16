$(document).ready(function(){

  $('body > div.wrapper > ul > li:nth-child(1)').click(function(){
    $('#offense').addClass('open');
    $('#defense').removeClass('open');
    $('#special_teams').removeClass('open');
    $('body > div.wrapper > ul > li:nth-child(1)').addClass('active');
    $('body > div.wrapper > ul > li:nth-child(2)').removeClass('active');
    $('body > div.wrapper > ul > li:nth-child(3)').removeClass('active');
  });

  $('body > div.wrapper > ul > li:nth-child(2)').click(function(){
    $('#offense').removeClass('open');
    $('#defense').addClass('open');
    $('#special_teams').removeClass('open');
    $('body > div.wrapper > ul > li:nth-child(1)').removeClass('active');
    $('body > div.wrapper > ul > li:nth-child(2)').addClass('active');
    $('body > div.wrapper > ul > li:nth-child(3)').removeClass('active');
  });

  $('body > div.wrapper > ul > li:nth-child(3)').click(function(){
    $('#offense').removeClass('open');
    $('#defense').removeClass('open');
    $('#special_teams').addClass('open');
    $('body > div.wrapper > ul > li:nth-child(1)').removeClass('active');
    $('body > div.wrapper > ul > li:nth-child(2)').removeClass('active');
    $('body > div.wrapper > ul > li:nth-child(3)').addClass('active');
  });

  var stat_row = '<tr class="stat_row"><td> <input type="text" class="stat"> </td><td> <input type="text" class="stat"> </td> <td> <input type="text" class="stat">  </td><td> <input type="text" class="stat">  </td><td> <input type="text" class="stat">  </td><td> <input type="text" class="stat">  </td><td> <input type="text" class="stat">  </td></tr>';

  $('#offense-add').click(function(){
    $('#offense-stat').append(stat_row);
  });

  $('#defense-add').click(function(){
    $('#defense-stat').append(stat_row);
  });

  $('#special-teams-add').click(function(){
    $('#special-teams-stat').append(stat_row);
  });

  $('#offense-sub').click(function(){
    $('.stat_row:last-child' ,'#offense-stat').remove();
  });

  $('#defense-sub').click(function(){
    $('.stat_row:last-child', '#defense-stat').remove();
  });

  $('#special-teams-sub').click(function(){
    $('.stat_row:last-child', '#special-teams-stat').remove();
  });

});
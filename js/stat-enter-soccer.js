$(document).ready(function(){

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

  var stat_row = '<tr class="stat_row"><td> <input type="text" class="stat"> </td><td> <input type="text" class="stat"> </td> <td> <input type="text" class="stat">  </td><td> <input type="text" class="stat">  </td><td> <input type="text" class="stat">  </td><td> <input type="text" class="stat">  </td><td> <input type="text" class="stat">  </td></tr>';

  $('#field-players-add').click(function(){
    $('#field-players-stat').append(stat_row);
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

});
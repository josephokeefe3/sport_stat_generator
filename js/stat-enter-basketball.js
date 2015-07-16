$(document).ready(function(){


  var stat_row = '<tr class="stat_row"><td> <input type="text" class="stat"> </td><td> <input type="text" class="stat"> </td> <td> <input type="text" class="stat">  </td><td> <input type="text" class="stat">  </td><td> <input type="text" class="stat">  </td><td> <input type="text" class="stat">  </td><td> <input type="text" class="stat">  </td></tr>';

  $('#players-add').click(function(){
    $('#players-stat').append(stat_row);
  });

  $('#players-sub').click(function(){
    $('.stat_row:last-child' ,'#players-stat').remove();
  });

});
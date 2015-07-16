$(document).ready(function(){
  var stat_row = '<tr class="stat_row"><td> <input type="text" class="stat"> </td><td> <input type="text" class="stat"> </td> <td> <input type="text" class="stat">  </td><td> <input type="text" class="stat">  </td><td> <input type="text" class="stat">  </td><td> <input type="text" class="stat">  </td><td> <input type="text" class="stat">  </td></tr>';

  $('.add_player').click(function(){
    $('.stat_table').append(stat_row);

  });
});
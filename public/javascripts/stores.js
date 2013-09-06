$(function(){
  if ($('#stores_list_all').length==1) {
    $.getJSON('/api/stores', { count: 500 }, function(data){
      $('#stores_list_all tbody').empty();
      $.each(data.stores, function(a, b){
        $('#stores_list_all tbody').append('<tr><td>' + (a + 1) + '</td><td>' +
          b[0] + '<br><small>' + b[1] + ', ' + b[2] + ', ' + b[3] + ', ' + b[4] +
          '</small></td><td>' + b[9].toFixed(6) + ', ' + b[10].toFixed(6) + '</td></tr>');
      });
    });
  }
});
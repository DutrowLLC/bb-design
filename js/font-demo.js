
var activateFontDemo = function(){

  $('#test-font').keyup(function(){
    $('.font-demo-table').find('td:not(:first-child)').text($('#test-font').val());
  });


};
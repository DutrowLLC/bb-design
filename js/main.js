
var pages = [
  'login',
  'accounts-overview',
  'account-detail',
  'move-money',
  'configure-transfer-or-payment'
];



$(document).ready(function(){

  // ADD MODIFIED ONES
  $("#configure-transfer-or-payment-filled-in").load("/html/configure-transfer-or-payment.html");


  // ADD CSS
  for( var i=0; i< pages.length; i++){
    var page = pages[i];
    // ADD CSS
    $('head').append('<link rel="stylesheet" href="/css/'+page+'.css" type="text/css" />');
    // ADD HTML
    $("#"+page) .load("/html/"+page+".html",
      (function(i){
      if( i == pages.length-1){

        setTimeout(function() {
          // MODIFIERS
          fillInConfigureTransferOrPayment();
          // VERTICAL ALIGN
          doVerticalAlign();
          }, 200);
      }
    })(i));
  }
});

var doVerticalAlign = function(){
  // HORIZONTALLY ALIGN MIDDLE
  $('[v-middle]').each(function(index, elem){
    elem = $(elem);
    var parent = elem.parent();

    var elemHeight   = elem.height();
    var parentHeight = parent.height();

    // parent.css ('position', 'relative');
    // elem.css   ('position', 'absolute');

    var paddingTop = (parentHeight/2)-(elemHeight/2);

    elem.css   ('padding-top', paddingTop);
  });
};

var fillInConfigureTransferOrPayment = function(){
  var elem = $("#configure-transfer-or-payment-filled-in");
  elem.find('.undone-indicator').hide();
  elem.find('.done-indicator')  .show();

  elem.find('.confirm-button').removeClass('confirm-button-disabled').addClass('confirm-button-enabled');
};

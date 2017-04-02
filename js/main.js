
var pages = [
  'login',
  'accounts-overview',
  'account-detail',
  'move-money',
  'configure-transfer-or-payment',
  'select-from-account',
  'select-to-account',
  'select-to-payee',
  'mobile-deposit',
  'mobile-deposit-take-picture'
];



$(document).ready(function(){

  // ADD MODIFIED ONES
  $("#configure-transfer-or-payment-filled-in") .load("./html/configure-transfer-or-payment.html");
  $("#mobile-deposit-filled-in")                .load("./html/mobile-deposit.html");


  // ADD CSS
  for( var i=0; i< pages.length; i++){
    var page = pages[i];
    // ADD CSS
    $('head').append('<link rel="stylesheet" href="./css/'+page+'.css" type="text/css" />');
    // ADD HTML
    $("#"+page) .load("./html/"+page+".html",
      (function(i){
      if( i == pages.length-1){

        setTimeout(function() {
          // MODIFIERS
          fillInConfigureTransferOrPayment();
          fillInConfigureMobileDeposit();
          // VERTICAL ALIGN
          doVerticalAlign();
          doVerticalAlign2();
          doVerticalAlign3();
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

    var paddingTop = (parentHeight/2)-(elemHeight/2);

    elem.css   ('padding-top', paddingTop);
  });
};
var doVerticalAlign2 = function() {
  $('[v-middle2]').each(function(index, elem){
    elem = $(elem);
    var parent = elem.parent();
    var elemHeight   = elem.height();
    var parentHeight = parent.height();

    parent.css( 'position', 'relative');
    elem  .css( 'position', 'absolute');

    elem.css('top', '0');
  });
};
var doVerticalAlign3 = function(){
  // HORIZONTALLY ALIGN MIDDLE
  $('[v-middle3]').each(function(index, elem){
    elem = $(elem);
    var parent = elem.parent();

    var elemHeight   = elem.height();
    var parentHeight = parent.height();

    var paddingBottom = (parentHeight/2)-(elemHeight/2);

    elem.css   ('padding-bottom', paddingBottom);
  });
};

var fillInConfigureTransferOrPayment = function(){
  var elem = $("#configure-transfer-or-payment-filled-in");
  elem.find('.undone-indicator').hide();
  elem.find('.done-indicator')  .show();

  elem.find('.confirm-button').removeClass('confirm-button-disabled').addClass('confirm-button-enabled');

  elem.find('.heading-tip').removeClass('heading-tip-working').addClass('heading-tip-ready');

  elem.find('.select-section.un-selected').hide();
  elem.find('.select-section.selected').show();
};

var fillInConfigureMobileDeposit = function(){
  var elem = $("#mobile-deposit-filled-in");
  elem.find('.undone-indicator').hide();
  elem.find('.done-indicator')  .show();

  elem.find('.confirm-button').removeClass('confirm-button-disabled').addClass('confirm-button-enabled');

  elem.find('.heading-tip').removeClass('heading-tip-working').addClass('heading-tip-ready');

  elem.find('.select-section.un-selected').hide();
  elem.find('.select-section.selected').show();

  elem.find('.select-section-check.un-selected').hide();
  elem.find('.select-section-check.selected').show();
};

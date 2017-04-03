
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
  'mobile-deposit-take-picture',
  'mobile-deposit-confirm-picture',
  'login-touch-id-ask'
];



$(document).ready(function(){

  // ADD MODIFIED ONES
  $("#configure-transfer-or-payment-filled-in") .load("./html/configure-transfer-or-payment.html");
  $("#mobile-deposit-filled-in")                .load("./html/mobile-deposit.html");
  $("#login-touch-id")                          .load("./html/login.html");
  $("#login-session-ended")                     .load("./html/login.html");


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
          fillInLoginTouchId();
          fillInLoginSessionEnded();
          // VERTICAL ALIGN
          doVerticalAlign();
          doVerticalAlign2();
          doVerticalAlign3();
          doJqCenter();
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
var doJqCenter = function(){

    $('[jq-center]').each(function(index, elem) {
      elem = $(elem);
      var height       = elem.height();
      var scrollHeight = elem[0].scrollHeight;
      var scrollWidth  = elem[0].scrollWidth;

      elem.css('margin-left', -scrollWidth/2);

      // //var transform = elem.css('transform');
      // var angle = getRotationAngle(elem);
      //
      // var property = 'margin-left';
      // if(angle == 90){
      //   var t = scrollHeight;
      //   scrollHeight = scrollWidth;
      //   scrollWidth = t;
      //   property = 'margin-top';
      // }
      //
      // //elem.css('margin-right', ''+-scrollWidth/2+'px');
      // elem.css(property,   ''+-scrollHeight/2+'px');
      // //elem.css('background-color', 'white');
      //
      // var a = 1;

    });

};

var getRotationAngle = function(elem){
  var tr = elem.css("transform");

  var values = tr.split('(')[1];
  values = values.split(')')[0];
  values = values.split(',');
  var a = values[0];
  var b = values[1];
  var c = values[2];
  var d = values[3];

  var scale = Math.sqrt(a*a + b*b);

// arc sin, convert from radians to degrees, round
// DO NOT USE: see update below
  var sin = b/scale;
  var angle = Math.round(Math.asin(sin) * (180/Math.PI));

// works!
  //console.log('Rotate: ' + angle + 'deg');

  return angle;
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
var fillInLoginTouchId = function(){
  var div = $('<div></div>');
  div.load('./html/iphone-modal.html');
  $("#login-touch-id").children().append(div);
};

var fillInLoginSessionEnded = function(){
  var div = $('<div></div>');
  div.load('./html/iphone-modal-login-session-ended.html');
  $("#login-session-ended").children().append(div);
};

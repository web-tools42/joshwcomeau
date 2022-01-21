$(document).ready(function(){
  
  $(".line.vbig").percentext({
    width: 80,
    letterSpacing: -20
  });
  $(".line.big").percentext({
    width: 80,
    letterSpacing: -10
  });

  $(".line.norm").percentext({
    width: 80,
    letterSpacing: -5
  });

  $(".line.small").percentext({
    width: 80
  });

  $(".line.vsmall").percentext({
    width: 80,
    letterSpacing: 5
  });

  $(".line.bigcenter").percentext({
    width: 70,
    letterSpacing: -10
  });

  $(".line.bigleft").percentext({
    width: 65,
    letterSpacing: -10
  }).css({
    "text-align": "left",
    "padding-left": '2rem'
  });

  $(".line.bigright").percentext({
    width: 80,
    letterSpacing: -10
  }).css({
    "text-align": "right", 
    "padding-left": '2rem'
  });
});
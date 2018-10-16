$(document).ready(function() {
  if ( $(window).width() < 560 ) {
    startCarousel();
  } else {
    $('.owl-carousel').addClass('off');
  }
});

$(window).resize(function() {
    if ( $(window).width() < 560 ) {
      startCarousel();
    } else {
      stopCarousel();
    }
});

function startCarousel(){
    $('.mobile_slider').owlCarousel({
    	items: 4,
    	nav: true,
    	dots: false,
    	loop: false,
    	margin: 30,
    	stagePadding: 0,
    	smartSpeed: 450,
    	navText : ['<div class="special__left"></div>','<div class="special__right"></div>'],
        responsiveClass:true,
        responsive:{
          0:{
              items:1,
              nav:true,
              margin: 8,
              loop:false
          },
          576:{
              items:2,
              nav:true,
              margin: 8,
              loop:false
          },
          720:{
              items:3,
              nav:true,
              margin: 10
          },
          960:{
              items:3,
              nav:true
          },
          1200:{
              items:4,
              nav:true
          }
        }
    });
}
function stopCarousel() {
  var owl = $('.owl-carousel');
  owl.trigger('destroy.owl.carousel');
  owl.addClass('off');
}

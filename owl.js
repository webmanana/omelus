$('.myorder_product').owlCarousel({
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

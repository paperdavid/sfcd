/**************************************/
/* Custom JavaScript files supervisor */
/**************************************/

$(document).ready(function() {

    /* Custom */

  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              mouseDrag:true
          },
          600:{
              items:2,
              mouseDrag:true
          },
          1000:{
              items:2,
              mouseDrag:true
          },
          1200:{
              items:3,
              loop:false,
              mouseDrag:false
          }
      }
  })

});
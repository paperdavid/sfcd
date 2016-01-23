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
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3,
              loop:false,
              mouseDrag:false
          }
      }
  })

});
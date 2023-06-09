$(document).ready(function() {


   $("#hamburger").click(function() {
      $(".sidenav").toggleClass("active-nav");
   })

   $("#showsidenav").click(function() {
      $(".sidenav").toggleClass("active-nav");
   })

   

   $(".nav-item").click(function(){
            $(this).siblings(".fal").toggleClass('active-fal');
   });



   function checkWidth() {
      var windowSize = $(window).width();
      if (windowSize > 974) {
           $('#navigation .dropdown > .nav-link').removeClass('enabled').addClass('disabled');
           $('#navigation .dropdown-2 > .dropdown-item').removeClass('enabled').addClass('disabled');
      } else {
           $('#navigation .dropdown > .nav-link').removeClass('disabled').addClass('enabled');
           $('#navigation .dropdown-2 > .dropdown-item').removeClass('disabled').addClass('enabled');
      }
   }
  checkWidth();
   $(window).resize(checkWidth);



   $(window).scroll(function() {
      var st = $(this).scrollTop();
      if( st > 10 ) {
         $("#navigation").css({
            background: "#222429"
         });
      } else {
         $("#navigation").css({
            background: "none"
         });
      }
   });




   $(".counter").counterUp({
      delay: 10,
      time: 2000
   });


   var owl = $('#homeSection .owl-carousel');
   owl.owlCarousel({
      animateOut: 'fadeOut',
      loop:true,
      nav:true,
      margin:0,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:false,
      responsive:{
         0:{
            items:1
         }
      }
   });


   // PORTFOLIO SECTION
   var mixer = mixitup('#portfolio');
   $(".indicator > span").click(function() {
      $(".indicator > span").removeClass("active");
      $(this).addClass("active");
   });



   var owl2 = $('#testimonialSection .owl-carousel');
   owl2.owlCarousel({
      animateOut: 'fadeOut',
      loop:true,
      nav:false,
      margin: 30,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      responsive:{
         0: {
            items:1
         },
         768: {
            items:2
         }
      }
   });



   var owl3 = $('#specialFeature .owl-carousel');
   owl3.owlCarousel({
      animateOut: 'fadeOut',
      loop:true,
      nav:false,
      margin: 30,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      responsive:{
         0: {
            items:1
         },
         768: {
            items:2
         },
         1024: {
            items:3
         }
      }
   });



   var wow = new WOW({
      boxClass:     'wow',      
      animateClass: 'animated', 
      offset:       0,          
      mobile:       true,       
      callback:     function(box) {
      
      },
      scrollContainer: null,    
      resetAnimation: true,     
   });
   wow.init();


   $('.popup-with-zoom-anim').magnificPopup({
      type: 'inline',

      fixedContentPos: false,
      fixedBgPos: true,

      overflowY: 'auto',

      closeBtnInside: true,
      preloader: false,

      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in'
   });


   /*-- SCROLL UP --*/
   $(".scroll-up").fadeOut();
   $(window).scroll(function() {
      if ( $(this).scrollTop()>100 ) {
         $(".scroll-up").fadeIn();
      } else {
         $(".scroll-up").fadeOut();
      };
   });

   $(".scroll-up").click(function() {
      $("html").animate({scrollTop: 0}, 1000);
      return false;
   });




});

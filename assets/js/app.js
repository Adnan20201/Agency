$(function (){
  'use strict';

  $('.slider-activation').slick({
      prevArrow:'<i class="fas fa-chevron-left banner-arrow1 left "></i>',
      nextArrow:'<i class="fas fa-chevron-right banner-arrow1 right"></i>',
      autoplay:true,
      autoplaySpeed:500,
      fade:true,
      cssEase:'linear',
      slidesToShow:1,
      slidesToScroll1,
      dots:true,
  });

  //Counter js
  $('.counter').counterUp();


  //Back To Top

  $(window).on('scroll',function (){
      if ($(window).scrollTop() > 500){
          $('#backToTop').fadeIn('800')
      } else{
          $('#backToTop').fadeOut('800')
      }
  });

  $('#backToTop').on('click',function (){
      $('html,body').animate({
          scrollTop:0
      },1000)
  });


  

  

})
















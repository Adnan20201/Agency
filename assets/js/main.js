(function ($){
    'use strict';

    $('.slider-activation').slick({
        prevArrow:'<i class="fas fa-chevron-left banner-arrow1 left "></i>',
        nextArrow:'<i class="fas fa-chevron-right banner-arrow1 right"></i>',
        autoplay:true,
        autoplaySpeed:500,
        fade:true,
        cssEase:'linear',


        "slidesToShow": 1, 
        "slidesToScroll": 1, 
        "arrows": true, 
        "fade": true,
        "infinite": true,
        "easing": "fade",
        "infinite": true,
        "adaptiveHeight": true,
        "dots": true 
    });
})

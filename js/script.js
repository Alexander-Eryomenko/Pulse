$(document).ready(function(){
  $('.carousel__inner').slick({
    speed: 1000,
    adaptiveHeight: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/chevron-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/slider/chevron-right.png"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });
});
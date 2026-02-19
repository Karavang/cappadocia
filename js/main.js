$(function () {
  $(".fairy-tail_slider, .our-trip_slider").slick({
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  });
 Fancybox.bind("[data-fancybox]", {  
  });
});

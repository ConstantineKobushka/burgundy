$(function () {
  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="arrows__prev slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="arrows__next slick-next"><img src="images/arrow-next.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 726,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  $(".footer__item-title").on("click", function () {
    $(this).toggleClass("footer__item-title--active");
    $(this).next().slideToggle();
  });
});

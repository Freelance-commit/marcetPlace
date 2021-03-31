$(function () {


    // $('#scroll_bottom').click(function(){
    //   $('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 600);
    //   return false;
    // });


  $('.slider-carousel').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    adaptiveHeight: true
  });
  
  $('.followers__content').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false
  });

  $('input[type="text"], select').styler();
  
  $(".rate-star").rateYo({
    rating: 4.5,
    spacing: "3px",
    ratedFill: "#ffc411",
    starWidth: "15px",
    autoplay: true,
    autoplaySpeed: 50000,

  });

  var mixer = mixitup('.products__inener');
})
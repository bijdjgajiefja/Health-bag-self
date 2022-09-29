// $('.main-slider').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   });

  $(document).ready(function () {
   
$('.main-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    arrow: true,
    autoplaySpeed: 2000
  });
      
});
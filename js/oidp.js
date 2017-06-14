$(document).ready(function(){
  window.addEventListener("load", function(event) {
    $(document).foundation();
  });

  var getSliderSettings = function() {
    return {
      slidesToShow: 3,
      slidesToScroll: 1
    };
  }

  $(".tabs-content-slide-rail").slick(getSliderSettings());

  $('.tabs').on('toggled', function (event, tab) {
    $(".tabs-content-slide-rail").slick('unslick');
    $(".tabs-content-slide-rail").slick(getSliderSettings());
  });
});

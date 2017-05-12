$(document).ready(function(){
  window.addEventListener("load", function(event) {
    console.log("lel");
    $(document).foundation();
  });

  $(".tabs-content-slide-rail").slick({
    slidesToShow: 3,
    slidesToScroll: 1
  });
});

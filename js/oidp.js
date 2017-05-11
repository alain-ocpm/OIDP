$(document).ready(function(){
  $(document).foundation();
  $(".tabs-content-slide-rail").slick({
    slidesToShow: 3,
    slidesToScroll: 1
  });
});





/*(function($) {
  //Fade In Effect
  var fadeIn = function() {
    $("body").css("opacity", "0");
    setTimeout(function(){ $("body").fadeTo(250, 1); }, 500);
  }

  //Schedule
  var schedule = function() {

    $(".tab-title a").on("click", function (event) {
      var targetPanel = $(this).attr("href");

      $(".tabs-content .content").css("display", "none");
      $(targetPanel).css("display", "block");
      $(targetPanel).css("opacity", "0");
      $(targetPanel).fadeTo(750, 1);
     })

    //Variable a changer pour la journée
    var currentDay = "jour1";
    currentDay = "#" + currentDay;

    if($(currentDay).length) {
      $(currentDay).addClass("active");
    }
  };

  var init = function() {
    //fadeIn();
    schedule();
  }

  $(document).ready(init);
})(jQuery)*/

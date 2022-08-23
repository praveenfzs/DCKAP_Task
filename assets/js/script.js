$(document).ready(function(){
    // Hamburger 
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
      $(".menu_outer_wrap").toggleClass("active");
    });

    $('.counters').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
  });

});
  
// header function
var headerScrolled = () => {
  function checkScroll() {
    if ($(window).scrollTop() >= 50) {
      $(".header-main").addClass("header-scrolled");
    } else {
      $(".header-main").removeClass("header-scrolled");
    }
  }
  
  $(document).ready(function() {
    checkScroll();
    $(window).scroll(checkScroll);
  });
}



var subMenu = () => {
  $('.btn-toogle').click(function(){
    $(this).toggleClass("click");
    // $('.sidebar').toggleClass("show");
    $('body').toggleClass("show");
  });
}
// initialize the functions
headerScrolled();
subMenu();
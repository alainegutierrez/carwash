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



var sidebarFunction = () => {
  $('.btn-toogle').click(function(){
    $(this).toggleClass("click");
    // $('.sidebar').toggleClass("show");
    $('body').toggleClass("show");
  });
}

var submenu = () => {
  $(".sidebar .main-menu li").each(function() {
    var submenuHeight = $(this).find(".sub-menu");

    var defaultHeight = 42;

    $(this).mouseover(function() {
      if ($(this).find(".sub-menu").length > 0) {
        var numberOfLi = $(this).find(".sub-menu li").length;
        var liHeight = numberOfLi * defaultHeight;
        var formattedHeight = liHeight+"px";
        $(this).find(".sub-menu").css("max-height", formattedHeight);
        // console.log($(this));
        // console.log("formatted height:" + formattedHeight);
      }
    }).mouseout(function() {
      $(this).find(".sub-menu").css("max-height", 0);
    })


  });


}

// initialize the functions
headerScrolled();
sidebarFunction();
submenu();
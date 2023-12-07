$(function () {
  /*헤더 스크롤*/
  $(window).on("scroll", function () {
    if (window.scrollY > 0) {
      $("#header").addClass("on");
      $(".vi_imgwrap").addClass("on");
      $(".home_title").addClass("on");
      $(".home_title").addClass("fff");
      $(".ab_home h3").css({ color: "#fff" });
    } else {
      $("#header").removeClass("on");
      $(".vi_imgwrap").removeClass("on");
      setTimeout(function () {
        $(".home_title").removeClass("on");
        $(".ab_home h3").css({ color: "#000" });
        $(".home_title").removeClass("fff");
      }, 800);
    }
  });
  /*햄버거바*/
  $("#header .bar").on("click", function () {
    $("#header .bar").toggleClass("on");
    $("#header .navi2").slideToggle(500);
  });

  setTimeout(function () {
    $(".text").eq(0).addClass("on");
  }, 200);

 
  /*스크롤효과*/
  let baseline = -800;
  let con1 = $(".con1").offset().top + baseline;
  let con2 = $(".con2").offset().top + baseline;
  let con3 = $(".con3").offset().top + baseline;

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    if (con1 < scroll && scroll <= con2) {
      $(".con1 ul li").addClass("on");
    }
    if (con2 < scroll && scroll <= con3) {
      $(".con2").addClass("on");
      setTimeout(function () {
        $(".con2 ul li").addClass("on");
      }, 500);
    }
    if (con3 < scroll) {
      $(".con3").addClass("on");
    }
  });
});

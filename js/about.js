$(function () {
  /*헤더 스크롤*/
  let fixnv = $(".about_navi").offset().top;
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
    if (window.scrollY >= fixnv - 100) {
      $(".about_navi").addClass("fix");
    } else {
      $(".about_navi").removeClass("fix");
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
  let baseline2 = -200;
  let con1li1 = $(".con1li1").offset().top + baseline;
  let con1li2 = $(".con1li2").offset().top + baseline;
  let con1li3 = $(".con1li3").offset().top + baseline;
  let con1li4 = $(".con1li4").offset().top + baseline;
  let con1 = $(".con1").offset().top + baseline;
  let con2 = $(".con2").offset().top + baseline;
  let con3 = $(".con3").offset().top + baseline;
  let Con1 = $(".con1").offset().top + baseline2;
  let Con2 = $(".con2").offset().top + baseline2;
  let Con3 = $(".con3").offset().top + baseline2;
  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    if (Con1 < scroll && scroll <= Con2) {
      $(".about_navi li").removeClass("on");
      $(".about_navi li:nth-of-type(1)").addClass("on");
    }
    if (Con2 - 200 < scroll && scroll <= Con3) {
      $(".about_navi li").removeClass("on");
      $(".about_navi li:nth-of-type(2)").addClass("on");
    }
    if (Con3 < scroll) {
      $(".about_navi li").removeClass("on");
      $(".about_navi li:nth-of-type(3)").addClass("on");
    }

    if (con1li1 < scroll) {
      $(".con1li1").addClass("on");
    }
    if (con1li2 < scroll) {
      $(".con1li2").addClass("on");
    }
    if (con1li3 < scroll) {
      $(".con1li3").addClass("on");
    }
    if (con1li4 < scroll) {
      $(".con1li4").addClass("on");
    }

    if (con2 < scroll && scroll <= con3) {
      $(".about_con2img").addClass("on");
      $(".about_con2wrap").addClass("on");
    }
    if (con3 < scroll) {
      $(".con3").addClass("on");
      setTimeout(function () {
        $(".con3 ul .li1").addClass("on");
      }, 500);
      setTimeout(function () {
        $(".con3 ul .li2").addClass("on");
      }, 700);
      setTimeout(function () {
        $(".con3 ul .li3").addClass("on");
      }, 1000);
    }
  });
});

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

  /*con2 카드 넘기기*/
  let num = $(".slide li").length;

  $(".nxt").on("click", function () {
    $(".slide li").first().appendTo(".slide");
    $(".slide").css({ left: "-100%" });
    $(".slide").css({ left: "0" });
    $(".slide li").removeClass("on");
    $(".slide li").eq(1).addClass("on");
  });
  $(".prv").on("click", function () {
    $(".slide li")
      .eq(num - 1)
      .prependTo(".slide");
    $(".slide").css({ left: "-100%" });
    $(".slide").animate({ left: "0" });

    $(".slide li").removeClass("on");
    $(".slide li").eq(1).addClass("on");
  });

  /*con3  클릭이벤트*/

  $(".con3_btn li").on("click", function () {
    let j = $(this).index();
    $(".con3_btn li").removeClass("on");
    $(".con3_btn li").eq(j).addClass("on");
    $(".con3_text div").fadeOut();
    $(".con3_text div").eq(j).fadeIn(500);
    $(".con3_img img").fadeOut();
    $(".con3_img img").eq(j).fadeIn(500);
  });

  /*스크롤효과*/
  let baseline = -800;
  let baseline2 = -200;
  let con1li1 = $(".con1li1").offset().top + baseline;
  let con1li2 = $(".con1li2").offset().top + baseline;
  let con1 = $(".con1").offset().top + baseline;
  let con2 = $(".con2").offset().top + baseline;
  let con3 = $(".con3").offset().top + baseline;
  let con4 = $(".con4").offset().top + baseline;
  let Con1 = $(".con1").offset().top + baseline2;
  let Con2 = $(".con2").offset().top + baseline;
  let Con3 = $(".con3").offset().top + baseline2;
  let Con4 = $(".con4").offset().top + baseline2;
  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    if (Con1 < scroll && scroll <= Con2) {
      $(".about_navi li").removeClass("on");
      $(".about_navi li:nth-of-type(1)").addClass("on");
    }
    if (Con2 < scroll && scroll <= Con3) {
      $(".about_navi li").removeClass("on");
      $(".about_navi li:nth-of-type(2)").addClass("on");
    }
    if (Con3 < scroll && scroll <= Con4) {
      $(".about_navi li").removeClass("on");
      $(".about_navi li:nth-of-type(3)").addClass("on");
    }
    if (Con4 < scroll) {
      $(".about_navi li").removeClass("on");
      $(".about_navi li:nth-of-type(4)").addClass("on");
    }
    if (con1 < scroll) {
      $(".con1 h2").addClass("on");
    }
    if (con1li1 < scroll) {
      $(".con1li1").addClass("on");
    }
    if (con1li2 < scroll) {
      $(".con1li2").addClass("on");
    }
    if (con1 < scroll && scroll <= con2) {
      $(".con1>h2").addClass("on");
    }
    if (con2 < scroll && scroll <= con3) {
      $(".con2 .title").addClass("on");
      setTimeout(function () {
        $(".con2 .ulwrap").addClass("on");
      }, 500);
    }
    if (con3 < scroll && scroll <= con4) {
      $(".con3").addClass("on");
    }
    if (con4 < scroll) {
      $(".con4").addClass("on");
    }
  });
});

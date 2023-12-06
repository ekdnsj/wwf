$(function () {
  let fixnv = $(".about_navi").offset().top;
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
  console.log(num);
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

  /*con3 굿즈 자동 슬라이드*/
  /*con2 자동슬라이드*/
  let i = 0;
  let num2 = $(".slide2 li").length;

  let timer = setInterval(start, 5000);

  function start() {
    $(".slide2")
      .stop()
      .animate({ left: "-100%" }, function () {
        $(".slide2 li").first().appendTo(".slide2");
        $(".slide2").css({ left: "0" });
      });
    if (i == num2 - 1) {
      i = 0;
    } else {
      i++;
    }
  }

  function back() {
    $(".slide2 li")
      .eq(num2 - 1)
      .prependTo(".slide2");
    $(".slide2").css({ left: "-100%" });
    $(".slide2").animate({ left: "0" });
    if (i == 0) {
      i = num2 - 1;
    } else {
      i--;
    }
  }

  $(".next").on("click", function () {
    clearInterval(timer);
    start();
    timer = setInterval(start, 5000);
  });

  $(".prev").on("click", function () {
    clearInterval(timer);
    back();
    timer = setInterval(start, 5000);
  });

  /*스크롤효과*/
  let baseline = -800;
  let baseline2 = -200;
  let con11 = $(".con11").offset().top + baseline;
  let con12 = $(".con12").offset().top + baseline;
  let con13 = $(".con13").offset().top + baseline;
  let con14 = $(".con14").offset().top + baseline;
  let con2 = $(".con2").offset().top + baseline;
  let con3 = $(".con3").offset().top + baseline;
  let con4 = $(".con4").offset().top + baseline;
  let Con1 = $(".con1").offset().top + baseline2;
  let Con2 = $(".con2").offset().top + baseline2;
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

    if (con11 < scroll) {
      $(".con11").addClass("on");
    }
    if (con12 < scroll) {
      $(".con12").addClass("on");
    }
    if (con13 < scroll) {
      $(".con13").addClass("on");
    }
    if (con14 < scroll) {
      $(".con14").addClass("on");
    }

    if (con2 < scroll && scroll <= con3) {
      $(".con2").addClass("on");
      setTimeout(function () {
        $(".con2 ul").addClass("on");
      }, 500);
    }
    if (con3 < scroll && scroll <= con4) {
      $(".con3").addClass("on");
    }
    if (con4 < scroll) {
      $(".con4 h2").addClass("on");
      setTimeout(function () {
        $(".con4 p").addClass("on");
      }, 500);
      setTimeout(function () {
        $(".con4 ul").addClass("on");
      }, 800);
    }
  });
});

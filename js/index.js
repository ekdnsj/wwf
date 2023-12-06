$(function () {
  /*헤더 스크롤*/
  $(window).on("scroll", function () {
    if (window.scrollY > 100) {
      $("#header").addClass("on");
    } else {
      $("#header").removeClass("on");
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
  let baseline2 = -500;
  let con1 = $(".con1").offset().top + baseline;
  let con2 = $(".con2").offset().top + baseline;
  let con3 = $(".con3").offset().top + baseline;
  let con4 = $(".con4").offset().top + baseline2;
  let con5 = $(".con5").offset().top + baseline;
  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    if (con1 < scroll && scroll <= con2) {
      $(".con1").addClass("on");
      setTimeout(function () {
        $(".con1_right li:nth-of-type(1)").addClass("on");
      }, 300);
      setTimeout(function () {
        $(".con1_right li:nth-of-type(2)").addClass("on");
      }, 500);
      setTimeout(function () {
        $(".con1_right li:nth-of-type(3)").addClass("on");
      }, 700);
      setTimeout(function () {
        $(".con1_right li:nth-of-type(4)").addClass("on");
      }, 900);
    }
    if (con2 < scroll && scroll <= con3) {
      $(".con2").addClass("on");
      $(".con2 >ul li").addClass("on");
    }
    if (con3 < scroll && scroll <= con4) {
      $(".con3").addClass("on");
    }
    if (con4 < scroll && scroll <= con5) {
      $(".con4").addClass("on");
    }
    if (con5 < scroll) {
      $(".con5").addClass("on");
    }
  });

  /* 비쥬얼 자동슬라이드 */
  let total = $(".viwrap li").length;
  let wid = -100;
  let num = 0;
  start();
  $(".navibar li").eq(num).addClass("on");

  function slide() {
    $(".navibar li").removeClass("on");
    $(".navibar li").eq(num).addClass("on");
    $(".text").removeClass("on");
    setTimeout(function () {
      $(".text").eq(num).addClass("on");
    }, 200);
  }

  function start() {
    timer = setInterval(function () {
      num++;
      if (num == total - 1) {
        $(".viwrap")
          .stop()
          .animate({ left: "-300%" }, function () {
            $(".viwrap").css({ left: "0" });
          });

        num = 0;
      } else {
        $(".viwrap")
          .stop()
          .animate({ left: `${num * wid}%` });
      }
      slide();
    }, 5000);
  }
  $(".next").on("click", function () {
    clearInterval(timer);
    num++;
    if (num == total - 1) {
      $(".viwrap")
        .stop()
        .animate({ left: "-300%" }, function () {
          $(".viwrap").css({ left: "0" });
        });

      num = 0;
    } else {
      $(".viwrap")
        .stop()
        .animate({ left: `${num * wid}%` });
    }
    slide();
    start();
  });
  $(".prev").on("click", function () {
    clearInterval(timer);
    num--;
    if (num < 0) {
      $(".viwrap").css({ left: "-300%" });
      $(".viwrap").stop().animate({ left: "-200%" });

      num = 2;
    } else {
      $(".viwrap")
        .stop()
        .animate({ left: `${num * wid}%` });
    }
    slide();
    start();
  });

  $(".navibar li").on("click", function () {
    clearInterval(timer);
    num = $(this).index();
    $(".viwrap")
      .stop()
      .animate({ left: `${num * wid}%` });
    slide();
    start();
  });
  /*con1 클릭효과*/
  $(".con1_left ul li").on("click", function () {
    let j = $(this).index();
    $(".con1_right ul").removeClass("on");
    $(".con1_right ul").eq(j).addClass("on");
    $(".con1_left ul li").removeClass("on");
    $(this).addClass("on");
  });

  /*con5 아코디언 메뉴*/
  $(".con5 li").on("mouseenter", function () {
    $(".con5 li").removeClass("on");
    $(this).addClass("on");
  });
  $(".con5 li").on("mouseleave", function () {
    $(this).removeClass("on");
  });

  $(".con1_right li").on("mouseover", function () {
    $(this).css({ borderColor: "#3f71b4;" });
  });
});

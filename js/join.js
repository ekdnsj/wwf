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

  /*con2 마우스*/
  document.addEventListener("mousemove", (e) => {
    //마우스 커서 좌표 가져오기
    let x = e.clientX;
    let y = e.clientY;

    //cursor를 커서 좌표로 이동
    $(".cursor").css("transform", "translate(" + x + "px, " + y + "px)");
  });

  //원하는 영역에 올라오면 클래스 추가 및 제거
  $(".trash").on("mouseover", function () {
    $(".inner_wrap").addClass("on");
  });
  $(".trash").on("mouseout", function () {
    $(".inner_wrap").removeClass("on");
  });

  /*영상 클릭이벤트*/
  $(".trash").on("click", function () {
    $(this).css({ display: "none" });
    setTimeout(function () {
      $("iframe").stop().animate({ opacity: "1" }, 1000);
    }, 1000);
  });
  /*con3 클릭이벤트*/
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
  let con1li3 = $(".con1li3").offset().top + baseline;
  let con1 = $(".con1").offset().top + baseline;
  let con2 = $(".con2").offset().top + baseline;
  let con3 = $(".con3").offset().top + baseline;
  let Con1 = $(".con1").offset().top + baseline2;
  let Con2 = $(".con2").offset().top + baseline2;
  let h31 = $(".h31").offset().top + baseline;
  let h32 = $(".h32").offset().top + baseline;
  let trash = $(".iframe").offset().top + baseline;

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    if (Con1 < scroll && scroll <= Con2) {
      $(".about_navi li").removeClass("on");
      $(".about_navi li:nth-of-type(1)").addClass("on");
    }
    if (Con2 < scroll) {
      $(".about_navi li").removeClass("on");
      $(".about_navi li:nth-of-type(2)").addClass("on");
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
    if (con1li3 < scroll) {
      $(".con1li3").addClass("on");
    }
    if (con1 < scroll && scroll <= con2) {
      // $(".con1>h2").addClass("on");
    }
    if (con2 < scroll && scroll <= con3) {
      $(".con2 .title").addClass("on");
      // setTimeout(function () {
      //   $(".con2 .ulwrap").addClass("on");
      // }, 500);
    }
    if (h31 < scroll) {
      $(".h31").addClass("on");
    }
    if (h32 < scroll) {
      $(".h32").addClass("on");
    }
    if (trash < scroll) {
      $(".trash").addClass("on");
    }
    if (con3 < scroll) {
      $(".con3").addClass("on");
    }
  });
});

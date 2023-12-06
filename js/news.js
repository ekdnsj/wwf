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

  //input을 datepicker로 선언
  $(".datepicker").datepicker({
    dateFormat: "yy-mm-dd", //달력 날짜 형태
    showOtherMonths: true, //빈 공간에 현재월의 앞뒤월의 날짜를 표시
    showMonthAfterYear: true, // 월- 년 순서가아닌 년도 - 월 순서
    changeYear: true, //option값 년 선택 가능
    changeMonth: true, //option값 월 선택 가능
    showOn: "both", //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시
    buttonImage: "./img/icon_cal.png", //버튼 이미지 경로
    buttonImageOnly: true, //버튼 이미지만 깔끔하게 보이게함
    buttonText: "선택", //버튼 호버 텍스트
    yearSuffix: "년", //달력의 년도 부분 뒤 텍스트
    monthNamesShort: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ], //달력의 월 부분 텍스트
    monthNames: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ], //달력의 월 부분 Tooltip
    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"], //달력의 요일 텍스트
    dayNames: [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ], //달력의 요일 Tooltip
    minDate: "-5Y", //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
    maxDate: "+5y", //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
  });

  //초기값을 오늘 날짜로 설정해줘야 합니다.
  $("#datepicker").datepicker("setDate", "today"); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)

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

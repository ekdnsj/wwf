$(function () {
  // visual 달력
  // visual 달력
  $("#datepicker, #datepicker1").datepicker({
    dateFormat: "yy-mm-dd", //Input Display Format 변경

    showOtherMonths: true, //빈 공간에 현재월의 앞뒤월의 날짜를 표시

    showMonthAfterYear: true, //년도 먼저 나오고, 뒤에 월 표시

    changeYear: true, //콤보박스에서 년 선택 가능

    changeMonth: true, //콤보박스에서 월 선택 가능

    yearSuffix: "년", //달력의 년도 부분 뒤에 붙는 텍스트

    monthNamesShort: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
    ], //달력의 월 부분 텍스트

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
    ], //달력의 월 부분 Tooltip 텍스트

    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"], //달력의 요일 부분 텍스트
    dayNames: [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ], //달력의 요일 부분 Tooltip 텍스트
    minDate: "0M", //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
    maxDate: "+12M", //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
  }); //초기값을 오늘 날짜로 설정
  $("#datepicker").datepicker("setDate", "today"); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
  $("#datepicker1").datepicker("setDate", "today +3"); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
});

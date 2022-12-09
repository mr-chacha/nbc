//버튼?누르면 class 추가하고 나머지는 제거하기
//1.버튼?누르면 orange 추가하고
//2 모든버튼에 있던 orange는 제거
//3.버튼?누르면 show 추가하고
//4.모든버튼에서 show는 제거
//5.반복되는걸 변수를 써서 줄여보자
let 탭버튼 = document.getElementsByClassName("tab-button");
let 탭컨텐츠 = document.getElementsByClassName("tab-content");

// for (let i = 0; i < 3; i++) {
//   탭버튼[i].addEventListener("click", function () {
//     탭버튼[i].classList.add("orange");
//     탭버튼[i].classList.remove("orange");
//     탭컨텐츠[i].classList.add("show");
//     탭컨텐츠[i].classList.remove("show");
//   });
// }
console.log("안녕");
// for (let i = 0; i < 3; i++) {
//   탭버튼[i].addEventListener("click", function () {
//     탭버튼[i].classList.add("orange");
//     탭버튼[i].classList.remove("orange");
//     탭버튼[i].classList.remove("orange");

//     탭컨텐츠[i].classList.add("show");
//     탭컨텐츠[i].classList.remove("show");
//     탭컨텐츠[i].classList.remove("show");
//   });
// }

탭버튼[0].addEventListener("click", function () {
  탭버튼[0].classList.add("orange");
  탭버튼[2].classList.remove("orange");
  탭버튼[1].classList.remove("orange");

  탭컨텐츠[0].classList.add("show");
  탭컨텐츠[1].classList.remove("show");
  탭컨텐츠[2].classList.remove("show");
});

탭버튼[1].addEventListener("click", function () {
  탭버튼[1].classList.add("orange");
  탭버튼[0].classList.remove("orange");
  탭버튼[2].classList.remove("orange");

  탭컨텐츠[1].classList.add("show");
  탭컨텐츠[0].classList.remove("show");
  탭컨텐츠[2].classList.remove("show");
});

탭버튼[2].addEventListener("click", function () {
  탭버튼[2].classList.add("orange");
  탭버튼[0].classList.remove("orange");
  탭버튼[1].classList.remove("orange");

  탭컨텐츠[2].classList.add("show");
  탭컨텐츠[0].classList.remove("show");
  탭컨텐츠[1].classList.remove("show");
});

// document
//   .getElementsByClassName("list")[0]
//   .addEventListener("click", function (e) {
//     if (e.target == 탭버튼[0]) {
//       탭열기(0);
//     }
//     // 지금누른게 버튼1이면 탭열기1
//     // 지금누른게 버튼2이면 탭열기2
//   });

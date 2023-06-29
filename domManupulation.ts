/* 타입스크립트로 HTML변경과 조작 */

/* querySelector */
let 제목 = document.querySelector('#title');

// 제목.innerHTML = '반가워요'; // let 제목: Element | null
// => union type이라서 오류남 => narrowing 해줘야함(타입 하나로 확정)

// 해결방법 1
if (제목 !== null) {
    제목.innerHTML = '반가워요';
}

// 해결방법 2 - instanceof
if (제목 instanceof Element) {
    // object instanceof class : object가 class의 인스턴스(자식)인가? true/false
    제목.innerHTML = '반가워요';
}

// 해결방법 3 = optional chaining
if (제목?.innerHTML) {
    제목.innerHTML = '반가워요';
}

let 링크 = document.querySelector('.link');
// if (링크 instanceof Element) { // 정확한 타입명 필요
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com';
}

/* eventListener */
let 버튼 = document.querySelector('#button');
버튼?.addEventListener('click', function () {});

// ---- 문제 ----
// 1. 버튼을 누르면 이미지를 바꿔봅시다.
// <index.html>
// <img id="image" src="test.jpg">
// 이미지를 new.jpg 라는 이미지로 바꾸고 싶으면 자바스크립트 코드를 어떻게 짜야할까요?

let 변경할이미지 = document.querySelector('#image');
if (변경할이미지 instanceof HTMLImageElement) {
    변경할이미지.src = 'new.jpg';
}

// 2. 3개의 링크가 있는데 이 요소들의 href 속성을 전부 https://kakao.com으로 바꿔봅시다.
// <index.html>
// <a class="naver" href="naver.com">링크</a>
// <a class="naver" href="naver.com">링크</a>
// <a class="naver" href="naver.com">링크</a>

let 변경할링크 = document.querySelectorAll('.naver');
변경할링크.forEach((link) => {
    if (link instanceof HTMLAnchorElement) {
        link.href = 'https://kakao.com';
    }
});

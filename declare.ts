export {};

/* declare  */
// .js에 있는 변수를 .ts에서 이용하고 싶을 때 declare 키워드로 재정의하기

// (data.js)
/* 
    var a = 10;
    var b = {name :'kim'}; 
*/

// (index.ts)
declare let a: number; // declare: 어딘가에 변수 a가 있으니까 에러내지말아줘...
console.log(a + 1);

// ex) jquery
declare let $: number;

// .ts -> .ts
// import, export 사용

/* ambient module */
// = 글로벌 모듈: import, export 없어도 다른 파일에 있는 변수 사용 가능
// 모든 ts 파일은 ambient module
// 글로벌 모듈이 싫으면 import or export 써주기 -> 로컬 모듈로 적용됨

// 로컬 모듈 상태에서 글로벌 변수를 만들고 싶으면? declare global
// 보통 type이나 interface에 사용
declare global {
    type Dog = string;
}

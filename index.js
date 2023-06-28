/* 기본타입 정리 */
var 이름 = 'kim';
var 나이 = 20;
var 퇴근했니 = false;
// array
var 멤버들 = ['kim', 'park'];
// object
var 멤버들2 = { member1: 'kim', member2: 'park' };
var 멤버들3 = [1, 2, 3]; // vscode에서 타입지정 원래 자동으로 됨
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
// union type : 타입이 2개 이상일 때
var 멤버들4 = 'kim';
var 멤버들5 = [1, '2', 3];
var 오브젝트 = { a: 123 };
// any type : 모든 자료형 허용 (= 모든 타입 다 들어가짐) TS 사용하는 의미가 x
var 애니;
애니 = 123,
    애니 = [];
// unknown type : 모든 자료형 허용 - any보다 안전 - 에러 메세지가 찍힘
var 언노운;
// let 변수1 : string = 언노운;
// => Type 'unknown' is not assignable to type 'string'.
var age;
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
// ---- 문제 ----

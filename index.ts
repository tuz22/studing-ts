/* 기본타입 정리 */
let 이름: string = 'kim';
let 나이: number = 20;
let 퇴근했니: boolean = false;

// array
let 멤버들: string[] = ['kim', 'park']

// object
let 멤버들2: { member1: string, member2: string } = { member1: 'kim', member2: 'park' }
let 멤버들3 = [1, 2, 3] // vscode에서 타입지정 원래 자동으로 됨

// 타입 키워드
type projectType = {
    member : string[],
    days : number,
    started : boolean
}
let project:projectType = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
}

// union type : 타입이 2개 이상일 때
let 멤버들4 : number | string = 'kim'
let 멤버들5 : (number | string)[] = [1, '2', 3]
let 오브젝트 :  { a : string | number } = { a : 123 }

// any type : 모든 자료형 허용 (= 모든 타입 다 들어가짐) TS 사용하는 의미가 x
let 애니 : any;
애니 = 123,
애니 = [];

// unknown type : 모든 자료형 허용 - any보다 안전 - 에러 메세지가 찍힘
let 언노운 : unknown;
// let 변수1 : string = 언노운;
// => Type 'unknown' is not assignable to type 'string'.

let age : string | number;
// age + 1; // age가 string 또는 number라서 계산 불가
// => Operator '+' cannot be applied to types 'string | number' and 'number'.


// ---- 문제 ----

type 학교타입 = {
    score : (number | boolean)[],
    teacher : string,
    friend: string | string[],
}
let 학교 : 학교타입 = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]

// ---- 문제 ----
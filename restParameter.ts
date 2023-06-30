/* rest 파라미터 */

function 함수(...x: number[]) {
    // rest parameter는 array로 들어옴
    // ...x : rest parameter
    console.log(x);
}
함수(1, 2, 3, 4, 5);

/* spread operator */
let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5]

/* destructuring */
let [변수1, 변수2] = ['안녕', 100];
console.log(변수1); // 안녕
console.log(변수2); // 100

// object 타입지정 - destructuring 사용해서 하는 방법
// let { student: student, grade: grade } = { student: true, grade: 4 };
let { student, grade } = { student: true, grade: 4 }; // 같으면 생략 가능

// ex)
let object = { student: true, grade: 4 };
/* 
    function 함수(a,b) {
        console.log(a,b)
    }
    함수(object.student, object.grade) 
*/

function 함수({ student, grade }: { student: boolean; grade: number }) {
    console.log(student, grade);
}
함수(object); // == 함수({ student: true, grade: 4 });

// ---- 문제 ----
// 1. 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
/* 
    함수( { user : 'kim', comment : [3,5,4], admin : false } ) 
*/
// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
// (조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.

let 문제1변수 = { user: 'kim', comment: [3, 5, 4], admin: false };
type 문제1타입 = {
    user: string;
    comment: number[];
    admin: boolean;
};
function 문제1({ user, comment, admin }: 문제1타입): void {
    console.log(user, comment, admin);
}
문제1(문제1변수);

// 2. 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
/* 
    함수( [40, 'wine', false] )
*/
// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
// (조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.

type 문제2타입 = (number | string | boolean)[];
function 문제2([a, b, c]: 문제2타입): void {
    console.log(a, b, c);
}
문제2([40, 'wine', false]);

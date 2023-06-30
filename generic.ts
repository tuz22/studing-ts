/* Generic */

// array를 입력하면 첫 자료를 return 해주는 함수

function 함수(x: unknown[]) {
    return x[0];
}
let a = 함수([4, 2]);
console.log(a + 1); // 'a' is of type 'unknown'

// 해결책
// 1. narrowing
// 2. Generic 함수 만들기(= 파라미터로 타입을 입력하는 함수) <-- !

function 함수2<MyType>(x: MyType[]): MyType {
    return x[0];
}
let a2 = 함수2<number>([4, 2]); // number를 MyType 자리에 넣어줌
let b = 함수2<string>(['4', '2']);
console.log(a2 + 1);

// ex2)
function 함수3<MyType>(x: MyType) {
    return x - 1; // The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
    // => 타입에 number가 아니라 string 같은게 와서 리턴 못 시킬까봐 에러 뜸
}
let c = 함수3<number>(100);

// 해결방법: extends로 타입 파라미터 제한두기
function 함수3해결<MyType extends number>(x: MyType) {
    return x - 1;
}
let c2 = 함수3해결<number>(100);

// 커스텀 타입으로도 타입 파라미터 제한 가능
interface LengthCheck {
    length: number;
}

function 함수5<MyType extends LengthCheck>(x: MyType) {
    return x.length;
}
let d = 함수5<string[]>(['100']);

// ---- 문제 ----
// 1. 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요?
// 연습삼아 Generic 이런걸로 만들어봅시다. 굳이 Generic 이런게 필요는 없겠지만요
/* 
    (동작 예시)
    함수<string>('hello') 이렇게 사용하면 콘솔창에 5가 나와야합니다. 
    함수<string[]>( ['kim', 'park'] ) 이렇게 사용하면 콘솔창에 2가 나와야합니다. 
*/

function 문제1<MyType extends string | string[]>(x: MyType) {
    console.log(x.length);
}

문제1<string>('hello');
문제1<string[]>(['kim', 'park']);

// 2. Animal 이라는 타입이 있습니다.
/* 
    interface Animal {
        name : string;
        age : number 
    }

    let data = '{"name" : "dog", "age" : 1 }' 
*/
// 그리고 data라는 변수도 있습니다. object처럼 생겼지만 따옴표 쳐진 JSON 자료입니다.
// data라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수를 만들어보십시오.
// 근데 변환된 object의 타입은 Animal이 되었으면 좋겠는데 어떻게 코드를 짜면 될까요?
// 오늘 배운 Generic을 이용해서 구현해보도록 합시다.
/* 
    (동작 예시)
    함수<Animal>(data) 이렇게 쓰면 이 자리에 { name : 'dog' , age : 1 } 이런 object 자료가 남아야합니다. 근데 타입은 Animal.
*/

interface Animal {
    name: string;
    age: number;
}

let data = '{"name" : "dog", "age" : 1 }';

function 문제2(x: string) {
    return JSON.parse(x);
}
let result = 문제2(data);
console.log(result);

// 3. class 를 수정해봅시다.
/* 
    class Person {
        name;
        constructor(a){
            this.name = a;
        }
    }
    let a = new Person('어쩌구');
    a.name // any
*/
//   지금 만든 class는 new Person('어쩌구') 라고 분명 문자를 집어넣었는데 any 타입이 name 속성에 부여됩니다.
//   이게 싫어서 파라미터에 string을 집어넣으면 string 타입
//   number를 집어넣으면 number 타입
//   string[]을 집어넣으면 string[] 타입이 되게 하려면 위의 코드를 어떻게 수정해야할까요?
//   오늘 배운 Generic을 이용해봅시다.

class Person3<T> {
    name;
    constructor(a: T) {
        this.name = a;
    }
}
let 문제3 = new Person3<string>('어쩌구');
문제3.name; // string

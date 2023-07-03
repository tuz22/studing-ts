/* array 자료에 붙일 수 있는 tuple type */

// let 멍멍: [string, boolean] = ['dog', true];
let 멍멍: [string, boolean];
멍멍 = ['dog', true];

// tuple 안에 옵션 표시 가능
let 멍멍2: [string, boolean?] = ['dog', true];

// 함수에서 사용하는 tuple
function 투플사용한함수(...x: [number, string]) {
    // 이건 파라미터가 []에 다 담겨서 옴
    console.log(x);
}
function 위에거랑비슷(a: number, b: string) {
    console.log([a, b]);
}
투플사용한함수(11, '22');

// array에서 사용하는 tuple
let 어레이 = [1, 2, 3, 100];
let 어레이2: [number, number, ...number[]] = [4, 5, ...어레이];

// ---- 문제 ----
// 1. 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.
// 오늘 배운 tuple 타입으로 타입지정합시다.

let 최근에먹은거: [string, number, boolean] = ['마라탕', 13000, true];

// 2. 이렇게 생긴 자료는 타입지정 어떻게 해야할까요? tuple 타입과 spread 연산자를 써보도록 합시다.
/* 
    let arr = ['동서녹차', 4000, true, false, true, true, false, true] 
*/

type 투플두번째문제Type = [string, number, ...boolean[]];
let 투플두번째문제: 투플두번째문제Type = [
    '동서녹차',
    4000,
    true,
    false,
    true,
    true,
    false,
    true,
];

// 3. 함수에 타입지정을 해보도록 합시다.
// - 이 함수의 첫째 파라미터는 문자,
// - 둘째 파라미터는 boolean,
// - 셋째 파라미터부터는 숫자 또는 문자가 들어와야합니다.
// 그럼 함수에 파라미터를 어떻게 만들고 타입지정은 또 어떻게 해야할까요? 오늘 배운 tuple 타입과 rest parameter를 사용해봅시다.

type 투플세번째문제Type = [string, boolean, ...(number | string)[]];
function 투플세번째문제(...x: 투플세번째문제Type) {
    console.log(x);
}

// 4. 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.
// 파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요합니다.
// 문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 일단 없습니다.
// 함수 만들어보시고 함수의 파라미터/return 타입지정도 확실하게 해봅시다.
/* 
    (동작예시)
    함수('b', 5, 6, 8, 'a') 이렇게 사용할 경우 이 자리에 [ ['b', 'a'], [5, 6, 8] ] 이 return 되어야합니다. 
*/
type 투플네번째문제Type = [...(string | number)[]];
function 투플네번째문제(...x: 투플네번째문제Type) {
    let result: [string[], number[]] = [[], []];
    x.forEach((item) => {
        if (typeof item === 'string') {
            result[0].push(item);
        } else {
            result[1].push(item);
        }
        return result;
    });
}

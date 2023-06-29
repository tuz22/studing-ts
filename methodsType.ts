/* 함수타입2 - 메서드 타입 */

// 함수타입은 함수 표현식으로 사용
type 함수타입 = (x: string) => number;

// 함수 선언식
function 함수() {}

// 함수 표현식
const 함수다: 함수타입 = function (x) {
    return 10;
};

// 참고: 콜백함수
function 함수일(x) {
    x();
}
function 함수이() {}
함수일(함수이); // 함수일 내부코드 x()가 실행 -> 파라미터 자리에 '함수이'가 있어서 함수이()가 실행됨. 여기서 함수이가 콜백함수

// ---- 문제 ----
//  1. 아래 코드에서 회원정보라는 변수에 타입지정하기
/* 
    let 회원정보 = {
        name: 'kim',
        age: 30,
        plusOne(x) {
            return x + 1;
        },
        changeName: () => {
            console.log('안녕');
        },
    };
    회원정보.plusOne(1);
    회원정보.changeName(); 
*/

type 회원정보Type = {
    name: string;
    age: number;
    plusOne: (x: number) => number;
    changeName: () => void;
};
let 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne(x) {
        return x + 1;
    },
    changeName: () => {
        console.log('안녕');
    },
};
회원정보.plusOne(1);
회원정보.changeName();

// 2. 다음 함수2개를 만들어보고 타입까지 정의해보십시오.
// - cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
// - removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다.
// - 함수에 타입지정시 type alias를 꼭 써보도록 합시다.

type cutZeroType = (x: string) => string;
type removeDashType = (x: string) => number;

const cutZero: cutZeroType = function (x) {
    if (x.charAt(0) === '0') {
        // 문자열.chart(index) : 문자열의 index번째 값
        return x.substring(1); // 문자열.substring(index) : 문자열의 index번째부터 값 출력
    }
};

const removeDash: removeDashType = function (x) {
    let removedX = x.replace(/-/g, '');
    return Number(removedX); // == return parseFloat(removedX);
};

// 3. 2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다.
// 이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
// - 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
// - 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
// - 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다.
// 이 함수는 어떻게 만들면 될까요?
// 둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.
// ex)
// 만들함수('010-1111-2222', cutZero, removeDash)
// 이렇게 사용하면 문자에 1. cutZero를 해주고, 2. removeDash를 해주고 그 결과를 콘솔창에 1011112222 이렇게 출력해줍니다.

type 만들함수Type = {
    phone: string;
    cutFunc: cutZeroType;
    removeFunc: removeDashType;
};
const 만들함수 = function (phone, cutFunc, removeFunc) {
    let result = removeFunc(cutFunc(phone));
    console.log(result);
};
만들함수('010-1111-2222', cutZero, removeDash);

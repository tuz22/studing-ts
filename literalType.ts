/* Literal Types */
//  더 엄격하게 타입 지정
// const 변수의 업그레이드 버전?
// 자동완성 기능이 되어서 편한듯

let 방향: 'left' | 'right';
방향 = 'left';

function 함수(x: 'hello'): 1 | 0 {
    return 1;
}
함수('hello');

var 자료 = {
    name: 'kim',
};

function 내함수(x: 'kim') {} // 'kim'이란 자료만 들어올 수 있음(x) / 'kim'이란 타입만 들어올 수 있음(o)
내함수('kim');
내함수(자료.name); // Argument of type 'string' is not assignable to parameter of type '"kim"'.

// 해결 방법1 : as const
var 내자료 = {
    name: 'kim',
} as const; // object value 값을 타입으로 지정해줌 'kim'이 타입이됨

// 해결 방법2 : readonly
type 내자료타입 = {
    readonly name: 'kim';
};
var 내자료2: 내자료타입 = {
    name: 'kim',
};
내함수(내자료2.name);

/* Never Type */
// 조건1. return 값이 없어야함
// 조건2. endpoint가 없어야함

function 함수(): never {
    throw new Error();
}
function 함수2(): never {
    while (true) {}
}

// never 타입이 등장하는 경우 1 - 뭔가 이상한 narrowing
function 함수3(parameter: string) {
    if (typeof parameter === 'string') {
        console.log(parameter);
    } else {
        console.log(parameter); // (parameter) parameter: never
    }
}

// never 타입이 등장하는 경우 2 - 어떤 함수표현식은 return 타입이 자동으로 never
let 함수4 = function () {
    // let 함수4: () => never
    throw new Error();
};

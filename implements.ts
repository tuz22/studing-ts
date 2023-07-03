export {};
/* implements 키워드 */
// interface의 용도가 object 타입 지정 외에 class 타입을 확인하는 것도 있음
// 이때, implements 키워드가 필요함
// implements: interface에 들어있는 속성 확인. class에 타입 할당 or 변형 키워드 x

/* 
    class Car {
        model: string;
        price: number = 100;
        constructor(a: string) {
            this.model = a;
        }
    }
    let 내차 = new Car('chacha') 
*/

// class가 model, price 속성을 가지고 있는지 타입으로 확인하기

interface CarType {
    model: string;
    price: number;
}

class Car implements CarType {
    model: string;
    // price: number = 100; // 빠진 속성이 있으면 아래와 같이 에러 띄움
    // Class 'Car' incorrectly implements interface 'CarType'. Property 'price' is missing in type 'Car' but required in type 'CarType'.
    constructor(a: string) {
        this.model = a;
    }
    price: number;
}
let 내차 = new Car('chacha');

export {};

/* keyof 연산자 */
// object 타입에 사용하면 object 타입이 가지고 있는 모든 key 값을 union type으로 합쳐서 보내줌

type PersonKeys = keyof Person; // 'age' | 'name'
let a: PersonKeys = 'name';

/* 잘못 만든 타입을 변경하기 = 타입 매핑하기 */
type Car = {
    color: boolean;
    model: boolean;
    price: boolean | number;
};

type typeChanger<MyType> = {
    [key in keyof MyType]: string; // 왼쪽에 있는 key값이(MyType = Car = color & model & price) 있으면 string이 됨
};

type newType = typeChanger<Car>; // type newType = { color: string; model: string; price: string;}

// ---- 문제 ----
// 1. 다음 타입을 변환기 돌려보십시오.
type Bus = {
    color: string;
    model: boolean;
    price: number;
};
//   잘못 만든 타입입니다. color, model, price 속성은 전부 string 또는 number 타입이어야합니다.
//   - 변환기 하나 만드시고
//   - 기존 Bus 타입을 변환기 돌려서 위 조건을 충족하는 새로운 타입을 하나 만들어보십시오.

type busTypeChanger<T> = {
    [key in keyof T]: string | number;
};

type newBus = busTypeChanger<Bus>;

// 2. 이런 변환기는 어떻게 만들어야할까요?
// - object안에 들어있는 모든 속성을
// - string, number 이렇게 고정된 타입으로 변환해주는게 아니라
// - 내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 변환기를 만들어보십시오.

type myTypeChanger<T, MyType> = {
    [key in keyof T]: MyType;
};
type newBus2 = myTypeChanger<Bus, string[]>;

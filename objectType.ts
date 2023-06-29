/* Object Type, interface */
// Object는
// 1. type 키워드로 타입변수 생성 가능
// 2. interface 키워드로 타입변수 생성 가능

// 1. type 키워드
type SquareType1 = { color: string; width: number };

// 2. interface 키워드
interface SquareType2 {
    color: string;
    width: number;
}
let 네모: SquareType2 = { color: 'red', width: 100 };

// interface 장점: extend로 복사 가능
interface StudentType {
    name: string;
}
interface TeacherType extends StudentType {
    age: number;
}
let 학생: StudentType = { name: 'kim' };
let 선생: TeacherType = { name: 'lee', age: 30 };

// 참고: type aliases로 비슷한거 가능(복사는 아니고 교차(두 타입 전부 만족하는 타입)) : &(intersection type) 사용
type AnimalType = { name: string };
type CatType = { age: number } & AnimalType;

/* type vs interface */
// interface는 중복선언 가능(=합쳐짐) / type은 중복선언 불가능
// 중복속성이 발생했을 때 interface는 에러 띄워줌 / type은 에러 안띄워줌

interface sampleType1 {
    name: string;
}
interface sampleType2 extends sampleType1 {
    name: boolean; // 중복속성 발생 시 에러 띄워줌
    age: number;
}

type sampleType3 = { name: string };
type sampleType4 = { name: boolean } & sampleType3; // name 중복속성 발생했지만 에러 안띄워줌

// *외부 라이브러리 같은 경우 interface를 많이 사용

// ---- 문제 ----
// 1. interface 이용해서 간단하게 타입을 만들어봅시다
/* 
    ex)
    let 상품 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }
*/
interface Product {
    brand: string;
    serialNumber: number;
    model: string[];
}
let 상품: Product = {
    brand: 'Samsung',
    serialNumber: 1360,
    model: ['TV', 'phone'],
};

// 2. array 안에 object 여러개가 필요합니다.
// 쇼핑몰 장바구니를 구현하려고 하는데 이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요?
// 오늘 배운 interface 문법을 써봅시다.
/* 
    ex)
    let 장바구니 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 
*/
interface Cart {
    product: string;
    price: number;
}
let 장바구니: Cart[] = [
    { product: '청소기', price: 7000 },
    { product: '삼다수', price: 800 },
];

// 3. 위에서 만든 타입을 extends 해봅시다.
// 갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다.
// 위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오.
/* 
    ex)
    { product : '청소기', price : 7000, card : false }
*/
interface Cart {
    product: string;
    price: number;
}
interface NewCart extends Cart {
    card: boolean;
}

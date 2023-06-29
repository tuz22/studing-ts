/* Type Aliases : 타입 변수*/
// 타입이 길고 복잡해 질 때 + 나중에 이 타입을 다시 사용하고 싶을 때 사용

type FruitsType = { name: string; price: number }; // Type은 대문자로 시작하기
let 과일: FruitsType = { name: 'apple', price: 1000 };

/* readonly */
// const 변수는 재할당은 금지인데 object 속성은 바꿀 수 있음
// ex)
const color = {
    name: 'red',
};
color.name = 'blue';

// 수정 못하게 막은 코드
type ColorType = {
    readonly name: string;
};
const color2: ColorType = {
    name: 'red',
};
color2.name = 'blue'; // Cannot assign to 'name' because it is a read-only property.
// 참고: 에디터 상에서 에러 띄워주는 거지 실제 실행을 막아주는 건 아님

/* Type 키워드 합치기 */
type Name = string;
type Age = number;
type NewType = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };
type NewPosition = PositionX & PositionY;
let position: NewPosition = { x: 10, y: 20 };
// 참고: 같은 이름의 type 변수는 재정의 x

// ---- 문제 ----
// 1. 다음 조건을 만족하는 타입을 만들어봅시다.
// - 이 타입은 object 자료형이어야합니다.
// - 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다.
// - 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// - 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.

type TestType = {
    color?: string;
    size: number;
    readonly postition: number[];
};
let test: TestType = {
    size: 123,
    postition: [1, 2, 3],
};

// 2. 다음 조건을 만족하는 타입을 만들어봅시다.
// - 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
// - object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// - 각 속성이 어떤 타입일지는 자유롭게 정하십시오.

type UserType = {
    name: string;
    phone: number;
    email: string;
};
let objectTest: UserType = {
    name: 'kim',
    phone: 1012345678,
    email: 'aaa@naver.com',
};

// 3. 다음 조건을 만족하는 타입을 만들어봅시다.
// - 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// - 미성년자 여부 속성은 true/false만 들어올 수 있습니다.
// - 멋있게 숙제3에서 만들어둔 type alias를 재활용해봅시다.

type AdultType = { adult: boolean };
type TestType2 = UserType & AdultType;
let 청소년: TestType2 = {
    name: 'kim',
    phone: 1011112222,
    email: 'bbb@naver.com',
    adult: false,
};

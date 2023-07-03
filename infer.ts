export {};

/* 조건부로 타입 만들기 */
// 파라미터로 string을 넣으면 string, 아니면 unknown으로 만들기
type Age<T> = T extends string ? string : unknown; // 조건식은 extends 사용해야함
let a: Age<string>; // let a: string
let a2: Age<number>; // let a2: unknown

// ex) 그럼 파라미터로 array 자료를 입력하면 array의 첫 자료의 타입을 그대로 남겨주고,
// array 자료가 아니라 다른걸 입력하면 any 타입을 남겨주는 타입은 어떻게 만들면 될까요?
type FirstItem<T> = T extends any[] ? T[0] : any;

let age1: FirstItem<string[]>;
let age2: FirstItem<number>;

/* infer 키워드 */
// 조건문에서 사용 가능
// 왼쪽에서 타입을 뽑아옴
type Person<T> = T extends infer R ? string : unknown; // T를 뽑아서 R에 담음
type a = Person<string>; // type a = string

// ex) array 내부의 타입만 뽑기
type 타입추출<T> = T extends (infer R)[] ? string : unknown;
type b = 타입추출<string[]>; // type b = string

// ex)2 함수를 넣으면 함수의 return 타입만 뽑기
// 참고: ReturnType이라는 기본함수가 있음
type 함수타입추출<T> = T extends () => infer R ? R : unknown;
type c = 함수타입추출<() => void>; // type c = void
type c2 = ReturnType<() => void>; // type c2 = void

// ---- 문제 ----
//  1. 타입 파라미터로
// - array 타입을 입력하면
// - array의 첫 자료가 string이면 string 타입을 그대로 남겨주고
// - array의 첫 자료가 string이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들어놔야할까요?
/* 
    (동작예시)
    let age3 :Age<[string, number]>;
    let age4 :Age<[boolean, number]>;  
*/
// 이러면 age1의 타입은 string, age2의 타입은 unknown이 되어야합니다. (array나 tuple이나 그게 그거임)
// 이걸 만족하는 type Age를 만들어봅시다.
type myAge<T> = T extends [string, ...any] ? T[0] : unknown;
let age3: myAge<[string, number]>; // let age3: string
let age4: myAge<[boolean, number]>; // let age4: unknown

// 2. 함수의 파라미터의 타입을 뽑아주는 기계를 만들어보십시오. 함수의 파라미터타입이 남아야합니다.
/* 
    타입뽑기<(x :number) => void> //이러면 number가 이 자리에 남음
    타입뽑기<(x :string) => void> //이러면 string이 이 자리에 남음 
*/

type 타입뽑기<T> = T extends (x: infer R) => any ? R : any;
type resultType = 타입뽑기<(x: number) => void>;

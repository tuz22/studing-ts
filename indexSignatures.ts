export {};

/* index signatures */
// object 자료에 타입을 미리 만들어주고 싶은데
// 1. object 자료에 어떤 속성들이 들어올 수 있는지 아직 모르는 경우
// 2. 타입지정할 속성이 너무 많은 경우
// 이럴 때 사용

interface StringOnly {
    [key: string]: string; // 모든 string으로 들어오는 key값에 할당되는 value는 string 이어야함
}

let obj: StringOnly = {
    name: 'kim',
    age: '20',
    location: 'seoul',
};

/* 
    interface StringOnly {
        age: number; // 에러남. Property 'age' of type 'number' is not assignable to 'string' index type 'string'.
        [key: string]: string;
    } 
*/

// array 형태도 가능
// 물론 숫자 key만 넣을거면 그냥 array + tuple 타입 쓰는게 더 직관적일듯..
interface StringOnly2 {
    [key: number]: string;
}

let obj2: StringOnly2 = {
    0: 'kim',
    1: '20',
    2: 'seoul',
};

/* Recursive Index Signatures */
interface MyType {
    'font-size': MyType | number;
}

let obj3: MyType = {
    'font-size': {
        'font-size': {
            'font-size': 14, // 이런 코드 타입 지정하기
        },
    },
};

// ---- 문제 ----
// 1. 다음 자료의 타입을 지정해보십시오. (index signature 사용)
interface 문제1type {
    [key: string]: string | number;
}

let 문제1obj: 문제1type = {
    model: 'k5',
    brand: 'kia',
    price: 6000,
    year: 2030,
    date: '6월',
    percent: '5%',
    dealer: '김차장',
};

// 2. 다음 object 자료의 타입을 interface 써서 만들어보십시오. (recursive index signature 사용)

interface 문제2type {
    'font-size': number;
    [key: string]: number | 문제2type;
}

let 문제2obj = {
    'font-size': 10,
    secondary: {
        'font-size': 12,
        third: {
            'font-size': 14,
        },
    },
};

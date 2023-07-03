/* d.ts 파일 */
// 타입만 저장할 수 있는 파일 형식(definition의 약자인 d)
// 자바스크립트로 컴파일 x
// 자동 글로벌 모듈 x = (로컬 모듈)

// 사용처
// - 타입 정의만 따로 저장해두고 import해서 사용
// - 프로젝트에서 사용하는 타입을 쭉 정리해놓을 레퍼런스용

// d.ts 파일 세팅:
/* 
    (tsconfig.json)

    "compilerOptions" : {
        "declaration" : true // ts파일마다 d.ts 파일 자동생성 세팅 방법
        "typeRoots" : ["./types"] // 이 폴터 안에 있는 타입들은 글로벌하게 사용
    } 
*/
export type Age = number;
export interface Person {
    name: string;
}

// 유명한 js 라이브러리들은 d.ts 파일 제공
// https://github.com/DefinitelyTyped/DefinitelyTyped
// 참고: "typeRoots" 옵션이 있을 경우 node_modules/@types 폴더를 추가해야함. 아니면 그냥 "typeRoots" 옵션을 제거하던지
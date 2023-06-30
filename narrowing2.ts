/* Narrowing2 - 추가적인 방법들 */

/* null & undefined 타입 체크 */
// 1. && 연산자
function 함수(x: string | undefined) {
    if (x && typeof x === 'string') {
    }
}

// 2. in 키워드
type Fish = { swim: string };
type Bird = { fly: string };

function 동물(animal: Fish | Bird) {
    // if (typeof animal === ) { // typeof 연산자는 number, stringm, boolean, object 이런식으로만 판정 가능
    if ('swim' in animal) {
        // in 키워드로 서로 배타적인 속성을 가진 타입을 체크 가능
        animal.swim;
    }
}

// typeof 연산자로 narrowing 못할 때
// 비슷한 object 타입일 경우: literal type을 만들어두면 narrowing이 편함
type CarType = {
    wheel: '4개'; // literal type
    color: string;
};
type BikeType = {
    wheel: '2개'; // literal type
    color: string;
};
function 탈것(x: CarType | BikeType) {
    if (x.wheel === '4개') {
        console.log('x는 CarType');
    }
}

// 3. instanceof 연산자
// 오브젝트 instanceof 부모class

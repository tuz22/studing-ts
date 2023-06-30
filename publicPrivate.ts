/* public, private, protected, static 키워드 */

/* public: 모든 자식들이 이용가능 */
class User {
    // public name = 'kim';
    name = 'kim'; // public 키워드는 생략가능
    constructor(a) {
        this.name = a;
    }
}
let 유저1 = new User('lee');
유저1.name = '안녕';

/* private: class 안에서만 수정, 이용 가능 */
class User2 {
    private name = 'kim';
    constructor(a) {
        this.name = a;
    }
}
let 유저2 = new User2('lee');
유저2.name = '안녕'; // Property 'name' is private and only accessible within class 'User2'. -> 너 수정권한 x

// ex
// {name: a, familyName: 'kim'}을 복사해주는 class
class User3 {
    name: string;
    private familyName: string = 'kim';
    constructor(a) {
        this.name = a + this.familyName;
    }
}
let 유저3 = new User3('민수');
console.log(유저3); // User3 {familyName: 'kim', name: '민수kim'}

console.log((유저3.name = '철수')); // private이 없으면 수정 가능
console.log(유저3.familyName); // private 사용해서 수정 막기

// private을 사용하고 class 밖에서(= 자식이 부모를) 수정하려면?
// 1. class 안에 private을 사용한 변수를 변경하는 함수 제작
// 2. 자식들이 사용

class User4 {
    name: string;
    private familyName: string = 'kim';
    constructor(a) {
        this.name = a + this.familyName;
    }
    이름변경함수() {
        this.familyName = 'park';
    }
}
let 유저4 = new User4('민수');
유저4.이름변경함수();
console.log(유저4); // User4 {familyName: 'park', name: '민수kim'}

// public 키워드 사용 시 this. 생략가능
class User5 {
    constructor(public name) {
        // 이 자리에 들어온 파라미터는 자식의 name속성에 기입해줌
    }
}
let 유저5 = new User5('kim');
console.log(유저5); // User5 {name : 'kim'}

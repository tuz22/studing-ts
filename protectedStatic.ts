/* public, private, protected, static 키워드2 - protected, static */

// extends
// ex)
class User6 {
    x = 10;
}

class NewUser extends User6 {}

let 유저6 = new NewUser();
console.log(유저6); // NewUser {x: 10}

/* protected */
// 현재 class{} 안에서 + extends된 class{} 안에서 사용 가능
class User7 {
    protected x = 10;
}

class NewUser2 extends User7 {
    doThis() {
        this.x = 20;
    }
}

/* static */
// 부모 class에 직접 부여됨. 자식에게 안물려줌
class User8 {
    x = 10;
    y = 20;
}
let 유저8 = new User8();
console.log(유저8); // User8 { x = 10; y = 20;}

class User9 {
    static x = 10;
    y = 20;
}
let 유저9 = new User9();
console.log(유저9); // User9 { y = 20;}
console.log(User9.x); // 10

// ex)
class User10 {
    static skill = 'js';
    intro = User10.skill + '전문가입니다';
}
let 민수 = new User10();
console.log(민수); // User10 {intro: 'js전문가입니다'}

User10.skill = 'ts';

let 민수2 = new User10();
console.log(민수2); // User10 {intro: 'ts전문가입니다'}

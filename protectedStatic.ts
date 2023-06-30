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

// ---- 문제 ----
// 1. 다음 x, y, z 속성의 특징을 설명해보십시오.
/* 
    class User {
    private static x = 10;
    public static y = 20;
    protected z = 30;
    }
*/
// -. 필드값은 원래는 모든 User의 자식들에게 물려주는 속성이지만 x와 y에는 static 키워드가 붙었기 때문에 User.x 이런 식으로만 접근해서 쓸 수 있습니다. User의 자식들은 x와 y를 쓸 수 없습니다.
// -. private static x는 class 내부에서만 수정가능합니다.
// -. public static y는 class 내부 외부 상관없이 수정가능합니다. public 키워드 지워도 똑같이 동작할 듯
// -. protected z는 private 키워드와 유사하게 class 내부에서만 사용이 가능한데 약간 범위가 넓어서 extends로 복사한 class 내부에서도 사용할 수 있습니다.

// 2. x 속성에 숫자를 더해주는 함수가 필요합니다.

/*  class User {
        private static x = 10;
        public static y = 20;
    }
    User.addOne(3) //이렇게 하면 x가 3 더해져야함
    User.addOne(4) //이렇게 하면 x가 4 더해져야함
    User.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함 
*/
//   저렇게 User.addOne() 쓸 때마다 x가 증가하는 함수는 어떻게 만들 수 있을까요?
//   그리고 x값을 콘솔창에 출력해주는 printX() 함수도 한번 만들어보십시오.
//   (조건) private static x = 10; 이 코드 수정금지

class User문제2 {
    private static x = 10;
    public static y = 20;
    static addOne(a: number) {
        User문제2.x += a;
    }
    static printX() {
        console.log(User문제2.x);
    }
}
User문제2.addOne(3);
User문제2.addOne(10);
User문제2.printX();

// 3. 이런거 어떻게 만들까요?
/* 
    let 네모 = new Square(30, 30, 'red');
    네모.draw()
    네모.draw()
    네모.draw()
    네모.draw() 
*/
// 네모.draw()를 할 때마다
// index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가
// 가로 400px 세로 400px 공간 안에 무작위로 배치되어야합니다.
// Square라는 class를 어떻게 만들면 될까요?

/* 
    (index.html)
    <body>
        <script src="protectedStatic.js"></script>
    </body>
*/

class Square {
    constructor(
        public width: number,
        public height: number,
        public color: string
    ) {}
    draw() {
        let a = Math.random();
        let square = `<div style="
            position:relative;
            top:${a * 400}px; 
            left:${a * 400}px; 
            width:${this.width}px; 
            height : ${this.height}px; 
            background:${this.color}"></div>`;
        document.body.insertAdjacentHTML('beforeend', square);
    }
}
let 작은네모 = new Square(30, 30, 'red');
작은네모.draw();
작은네모.draw();
작은네모.draw();
작은네모.draw();

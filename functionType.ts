/* 함수에 타입 지정 & void 타입 */

// function 함수(x) {
//     return x * 2
// }

function 함수(x : number) : number { // 파라미터 x의 타입, return 타입
    return x * 2
}

function 함수2(x? : number) : number { // 파라미터 x가 옵션일 때 ? 사용. (x? : number) === (x : number | undefined)
    return x * 2
}

function 함수3(x : number) : void { // void : 리턴 안 할 때 사용
    // return x * 2
}


// ---- 문제 ----

// 1. 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
function 인사(x? : string) : void {
    if (x) {
        console.log('안녕하세요', + x)
    } else {
        console.log('이름이 없습니다')
    }
}

// 2. 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
// 예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
// 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
// 숫자 또는 문자 이외의 자료가 들어오면 안됩니다. 

function 자릿수세기(x : string | number) : number {
    return x.toString().length
}

// 3. 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
// - 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 
// - 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 
// - 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.
// - ex
// 결혼가능하냐(700, false, '중') 이렇게 사용할 경우 "결혼가능"을 return 해줍니다.
// 결혼가능하냐(100, false, '상') 이렇게 사용할 경우 아무것도 return되지 않습니다.

function 결혼(money :number, house :boolean, charm :string) :string|void{
    let score :number = 0;
    score += money;
    if (house === true){
        score += 500
    }
    if (charm === '상'){
        score += 100
    }
    if (score >= 600){
        return '결혼가능'
    } 
  }


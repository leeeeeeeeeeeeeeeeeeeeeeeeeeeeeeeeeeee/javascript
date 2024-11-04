//1. javascript언어 개론


//2. I/O Method(입출력)
//*입력: prompt
//*출력:alret, console.log,confirm

//3.Variable(변수)
//*저장 하는 공간!
//* const/let 변수명=데이터

//4. Data-type(데이터 타입)
//* String,Number ,Boolean,Underfined,Null
//*타입캐스팅(서로 타입 바꾸기) -명시적/암묵적

//5.Operator(연산자)
//*토큰
//*산술,논리,대입, 삼항,...
//*단축평가(&&,||)로 코드 최적화

//condition statement
//if~else문

const num = Number(prompt("정수 입력"));

if(num > 0){
    console.log("입력한 숫자는 0보다 큽니다.");
}
else if(num == 0){
    console.log("입력한 숫자는 0 입니다.");
}
else{
    console.log("입력한 숫자는 0보다 작습니다.");

}
console.log("프로그램 끝!");
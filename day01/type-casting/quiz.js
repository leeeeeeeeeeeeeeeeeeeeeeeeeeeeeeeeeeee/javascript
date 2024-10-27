//1.유저에게 첫 번째 숫자, 두 번째 숫자를 입력 받고
//두 수의 합을 콘솔로그로 나타내기!

//2.유저에게 나이를 물어보고,태어난 년도
//콘솔로그로 나타내기!


//const first=prompt ("첫 번째 숫자를 입력하세요");
//const second=prompt ("두 번째 숫자를 입력하세요");

//const a=Number(first)
//const b=Number(second)
//console.log( `두 수의 합은  ${a+b}`);
//또는 console.log(`두 수의 합은:${Number(first)+(second)}`);


//const age=prompt ("나이를 입력하세요");
//console.log(`태어난 년도는  ${2025-Number(age)}`);

//3.유저에게 한변의 길이를 입력받고, 정사각형의 넓이 나타내기
const bar=prompt("한변의 길이는")

console.log (`정사각형의 넓이는 ${Number(bar)*(bar)}`)
//또는 
const bar=Number(prompt("한 변의 길이는"));
console.log (`정사각형의 넓이는 ${(bar)*(bar)}`)



//4.유저에게 밑변과 높이를 입력받고, 정삼각형의 넓이 나타내기
const under=prompt("밑변을 입력");
const high=prompt("높이를 입력");
console.log (`정삼각형의 넓이는  ${Number(under)*(high)/2}`);


//5.유저에게 반지름을 입력 받고,원의 넓이와 둘레 나타내기
const surcle=Number(prompt=("반지름의 길이"));

console.log(`원의 넓이는 ${(surcle)*(surcle)*3.14*}둘레는 ${(surcle)*2*3.14}`);
//6.유저에게 일본 여행 갈 여비를 엔화로 바꾸기
//ex) 100000 -> 109170엔 환전
const yen_rate=109/1000;
const won=Number(("일본 여행 갈 여비"));
console.log(`엔화의 금액은 ${won*yen_rate}`);



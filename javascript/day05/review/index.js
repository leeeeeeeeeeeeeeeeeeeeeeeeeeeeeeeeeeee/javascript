// 동사(v) -> 함수
// 명사 -> 속성
[].push()


//1. [5,13,25,31,49]를 모두 숫자 10 더해서 콘솔로 나타내기!
const arr = [5,13,25,31,49];
const anwser1 = arr.map((x) => X + 10);

//2. [5,13,25,31,49]를 홀수면 두배 짝수면 -10을 해서 콘솔로 나타내기
const anwser2 = arr.map((x) => (X % 2 ? x * 2 : x - 10));
//3. ["kiwi","apple","orange","pineapple"]
// apple 포함하면 대문자로 바꾸고 아니면 문자 길이로 바꾸기!
const fruits = ["kiwi","apple","orange","pineapple"];

const anwser3 = fruits.map((x)=> x.includes("apple")? x.toUpperCase() : x.length)
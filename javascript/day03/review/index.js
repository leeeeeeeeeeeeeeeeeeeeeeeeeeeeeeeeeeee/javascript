//프로그래밍에서 절대 정답 없는 편
//0. 에러가 없기
//1. 가독성
//2. 성능

//1.prompt로 유저에게 입력받고, 양수 or 0 or 음수를 알려주는 프로그램
const num=Number()

//2.prompt로 유저에게 키와 몸무게를 입력받고, bm1 지수에 따라서 결과 나타내기
//ex) 173 85->비만

//3. prompt로 유저에게 태어난 년도를 입력받고, 띠 나타내기
// ex) 2000->용띠, 2005-> 닭띠

const ywar=Number(prompt("태어난 년도 입력"))
const  zoliac = year %12;
const zodiacAnamal ={
0:"원숭이",
1:"닭",
2:"개",
3:"돼지",
4:"쥐",
5:"소",
6:"호랑이",
7:"토끼",
8:"용",
9:"뱀",
10:"",
11:"양",
};
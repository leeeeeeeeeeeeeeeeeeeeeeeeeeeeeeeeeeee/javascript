//filter 걸러줘!
// const arr = [1, 2, 3, 4, 5];
// // every/some
// const text =arr.filter((x)=> x == 1 || x== 3);
// const test1=arr.filter((x)=> x % 2 ==0);
// console.log(test);
// console.log(test1);

// //1. 30 이하만 살리기!
// const arr1 = [10, 20, 30, 40, 50];
// const a1 = arr1.filter((x)=> x <= 30);

// //2. 글자 길이가 5글자 이하만 살리기
// //3. 알파벳 i 또는 e가 포함한 과일만 살리기!
// //const fruits = ["apple","banana","kiwi","mango","watermelon"];
// //const alphabet = ["k","j","q","r"];
// //const a2 = fruits.filter((x) => x.length <= 5);
// //const a3 = fruits.filter((x) => x.includes("i") || x.includes("e"));
// //fruits.filter((x)=> alphabet.some((y) => x.includes(y)));

// //기본: string, number, boolean
// //참조: array, object, student("이름",24(나이),전공여부)
// //const k =Number("100");
// //const j =Number("100");//k랑 j는 같음
// //const a =new student(" 전수효", 24, 전공여부);
// //const b =new student(" 전수효", 24, 전공여부);//a랑 b는 다름

// // fill()
// //const a = []

// //const a = Number("123")
// //const b = new Array()\
// //const a = Number(1);
// //const a1 = Number(1);

// //const b ="라면";
// //const b1 =String("라면");

//메소드 체이닝

//const c =new Array(20).fill("김밥");
//const c1 =new Array(10).fill(1);
//const c2 =new Array(10).fill(0).map((x) => x + 1);

//[1,3,5,7,9].map((x,i) => i);
//0~999  배열
//const arr1 = new Array(1000).fill(0).map((x,i)=>i);

// Q1. 0~1000 배열이 있고 홀수만 담기!
// const arr2 = new Array(1000).fill(0).map((x, i) => i).filter((x) => x % 2 == 1 );
// Q2. 0~1000 배열이 있고 3의 배수만 담기!
// const arr3 = new Array(1000).fill(0).map((x, i) => i).filter((x) => x % 3 == 0 );
// Q3. 0~1000 배열이 있고 5의 배수만 담고, 500~600은 걸르기!
// const arr4 = new Array(1000)
// .fill(0)
// .map((x, i) => i)
// .filter((x) => x % 5 == 0 )
// .filter((x) => x < 500 || 600 < x );

//map.filter ,reduce(누적시켜줘)

//reduce((a,c)=>{}, init)
//[1, 2, 3, 4, 5].reduce((a,c)=> a + c, 100);

//1~123의 누적의합 구하기!
// new Array(124)
// .fill(0)
// .map((x,i)=>i)
// .reduce((a,c)=> a + c);

// ["a", "c" ,"e"].reduce((a , c)=>a + c);
//"3556268222779485".split("".localeCompare((x,i)=> i < 12 ? "*" : x).reduce((a,c)=> a + C)

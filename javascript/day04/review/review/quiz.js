// cgv 프롬프트 프로그램
// 가격: 12000
// 팝콘: 6000, 스낵: 4000
// 콜라류: 3000, 사이다류: 2000
Const movie = [
    "보통의가족", 
    "베놈", 
    "베테랑2", 
    "와일드 로봇", 
    "대도시의 사랑법"
];
const snacks=["팝콘", "캬라멜 팝콘", "치즈 팝콘", "나쵸", "오징어 구이"];
const beverages= ["콜라", "제로콜라", "스트라이트", "제로스프라이트"];

const selestedMovie= Number(prompt(movie + " 번호 입력"));
const selestedSnack= Number(prompt(snacks + " 번호 입력"));
const selestedBeverage= Number(prompt(beverages+ " 번호 입력"));

const deterSnackPrice = (snack) => {
    return snack.includes("팝콘") ? 6000: 4000;
};

const deterBeveragePrice = (beverage)  =>{
    return beverage.includes(" 콜라") ? 3000: 2000;
};

console.log(`구매하신 제품:영화:${movie[selestedMovie]},스낵류:${snacks[selestedSnack]},음료:${beverages[selestedBeverage]}입니다.`)
console.log(`총 가격:${12000 + deterSnackPrice(snacks[selestedSnack])+deterBeveragePrice(beverages[selestedBeverage])}입니다.`)    





// 구매하신 제품: 영화:[~~~], 스낵류: [~~~], 음료:[~~~]

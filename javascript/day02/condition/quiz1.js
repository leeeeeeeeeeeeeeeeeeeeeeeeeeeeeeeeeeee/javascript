const bus = Number(prompt("1.마을버스 2.시내버스 3.광역버스 4. 고속버스 선택"));
const age = Number(prompt("나이가 몇 살 입니까?"));

const busData = {
    1:{
        name:"마을버스",
        price:1000,
     },
    2:{
        name:"시내버스",
        price:1500,
     },
    3:{
        name:"광역버스",
        price:2000,
     },
    4:{
        name:"고속버스",
        price:5000,
     },
};



console.log(
    `${busData[bus]["name"]}의 최종 금액은 ${busData[bus]["price"] * 1}입니다.`
);
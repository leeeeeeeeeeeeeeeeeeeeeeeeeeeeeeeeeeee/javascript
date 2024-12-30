// const t =document.createElement('button')
// t.addEventListener('mouseover')<-마우스를 올리면 문구가 뜬다!

//이벤트 추가하는 방법

//1.addEventListener사용
// const helloButton = document.querySelector(".hello");
// helloButton.addEventListener("click",()=>{
//     alert("오늘은 일요일!");
// });

// const hello = () => {
//     alert("오늘은 일요일임!");
// };

//버튼이 💛누르면 💔

// const breakHeart =() => {
//     const heart= document.querySelector(".heart");
//     heart.innerText=heart.innerText == "💔" ? "💛": "💔";
// };

// const one = document.querySelector("#one");
// one.addEventListener("click",() => {
//     alert("원!");
// });

//1.addEventListener

// const box = document.querySelector("#box");

// const big =document.querySelector("#big");
// big.addEventListener("click",()=>{
//     box.Style.width = "200px";
//     box.Style.height = "200px";
// });
// const small =document.querySelector("#small");
// small.addEventListener("click",()=>{
//     box.Style.width = "100px";
//     box.Style.height = "100px";
// });
// const sky =document.querySelector("#sky");
// sky.addEventListener("click",()=>{
//   box.Style.backgroundColor= "skyblue";
// });
// const pink =document.querySelector("#pink");
// pink.addEventListener("click",()=>{
//     box.Style.backgroundColor= "pink";
// });


//2.onclick

const box =document.querySelector("#box");

const big = () =>{
    box.style.width ="200px";
    box.style.height ="200px";
};

const small = () =>{
    box.style.width ="100px";
    box.style.height ="100px";
};

const sky = () =>{
    box.Style.backgroundColor= "skyblue";
};
const pink = () =>{
    box.Style.backgroundColor= "pink";
};


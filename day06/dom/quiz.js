// data.js -변수 모으기 -배열형 오브젝트 {제목,색상,버튼리스트}
// func.js -함수 모으기 -최소단위로 함수를 만들고 실행함
// style.js -css 관련 모으기 -쌩css를 이름 붙이면서 바꿈

// index.js -최종 모음집
const position = ["positiony","Z-index","top","button","left","right","Flexbox properties","float","clear"];
const display = ["display","opacity","transform"];
const clipping = ["overflow","clip"];
const animation = ["animation","transition"];
const box = ["margin","box-shadow","border","border-radius","box-sizing","width","height","padding"];
// const container = document.createElement("section");
// container.style.cssText ="display:flex; flex-direction:column; gap:10px;";

// const h4tag = document.createElement("h4");
// h4tag.innerText = "position and Layout";
// h4tag.style.cssText = "font-size:14px; color:#878787";
// container.appendChild(h4tag);

// const buttonBox = document.createElement("div")
// buttonBox.style.cssText ="diplay:flex; gap:5px;";
// container.appendChild(buttonBox);

// position.forEach((v)=>{
//    const btn = document.createElement("button");
//     btn.style.cssText = "background-color: #fac0ba;border:1px solid #fac0ba;border-radius: 5px; padding:10px 10px 7px; font-weight:bold; ";
//     btn.innerText =v;
//     buttonBox.appendChild(btn);
// });
// document.body.appendChild(container);
// //const btn1 = document.createElement("button");
// //btn1.style.cssText =" backgrondcolor:#d7d7d7;border-radius: 5px;padding:10px 10px 7px;font-weight:bold;";
// //btn1.innerText ="positiony";
// //buttonBox,appendChild(btn1)

// //const btn2 = document.createElement("button");
// //btn2.style.cssText =" backgrondcolor:#d7d7d7;border-radius: 5px;padding:10px 10px 7px;font-weight:bold;";
// //btn2.innerText ="z-index";
// //buttonBox,appendChild(btn2)

// const container1 = document.createElement("section");
// container1.style.cssText ="display:flex; flex-direction:column; gap:10px;";

// const h4tag1 = document.createElement("h4");
// h4tag1.innerText = "Display and Visibility";
// h4tag1.style.cssText = "font-size:14px; color:#878787";
// container1.appendChild(h4tag1);

// const buttonBox1 = document.createElement("div")
// buttonBox1.style.cssText ="diplay:flex; gap:5px;";
// container1.appendChild(buttonBox1);

// display.forEach((v)=>{
//    const btn = document.createElement("button");
//     btn.style.cssText = "background-color: #ffc08a;border:1px solid#ffc08a;border-radius: 5px; padding:10px 10px 7px; font-weight:bold; ";
//     btn.innerText =v;
//     buttonBox1.appendChild(btn);
// });
// document.body.appendChild(container1);
// /////////////////////////////////////////////////////////////
const makeTemplate =(titlename,color,buttonList) =>{
    const card = document.createElement("section");
    card.style.cssText ="display:flex; flex-direction:column; gap:10px;";

    const title = document.createElement("h4");
    title.innerText = titlename;
    title.style.cssText = "font-size:14px; color:#878787";
    card.appendChild(title);

    const buttonBox = document.createElement("div")
    buttonBox.style.cssText ="diplay:flex; gap:5px;";
    card.appendChild(buttonBox);

    buttonList.forEach((v)=>{
       const btn = document.createElement("button");
        btn.style.cssText = `background-color: ${color};border:1px solid ${color};border-radius: 5px; padding:10px 10px 7px; font-weight:bold; `;
        btn.innerText =v;
        buttonBox.appendChild(btn);
    });
    document.body.appendChild(card);
};

makeTemplate("Position and Layout","#fac1bb",position);
makeTemplate("Display and Visibility","#ffc08a",display);
makeTemplate("Clipping","#ffe18b",clipping);
makeTemplate("Animation","#c8df91",animation);
makeTemplate("Box Model (from outside in)","#98eccc",box);

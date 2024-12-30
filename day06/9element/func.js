import { buttonBoxstyle, cardstyle, titlestyle } from "./style.js";

export const makeTemplate =(titlename,color,buttonList) =>{
    const card = makecard();
    const title= makeTitle(titlename);
    const buttonBox =makebuttonbox();
    card.appendChild(title);
    card.appendChild(buttonBox);
    buttonList.forEach((v)=> buttonBox.appendChild(makebutton(color,v)));
    document.body.appendChild(card);
};

const makecard =() => {
    const card = document.createElement("section");
    card.style.cssText = cardstyle ;
    return card;
};

const makeTitle =(titlename) =>{
    const title = document.createElement("h4");
    title.innerText = titlename;
    title.style.cssText = titlestyle;
    return title;
}

const makebuttonbox = () => {
    const buttonBox= document.createElement("div");
    buttonBox.style.cssText =buttonBoxstyle;
    return buttonBox;

};

const makebutton = (color,buttonText) => {
    const button = document.createElement("button");
    button.style.cssText = makebuttonStyle(color);
    button.innerText =buttonText;
    return button;
    
};
const makebuttonStyle =(color) =>`background-color: ${color};border:1px solid ${color};border-radius: 5px; padding:10px 10px 7px; font-weight:bold; `;


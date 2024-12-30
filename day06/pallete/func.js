import {palleteStyle} from "./style.js";

export const makecolor =(color) =>{
    const box = document.createElement("div");
    box.style.cssText =paint(color);
   return box;
};

export const makepallete = () => {
    const pallete = document.createElement('section');
    pallete.style.cssText =palleteStyle;
    return pallete;
};

const paint=(color)=>`width:100%;height:100%;background-color:${color}`;
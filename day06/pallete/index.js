import {colors } from "./data.js";
import { makecolor, makepallete } from "./func.js";

const pallete =makepallete();
colors.forEach((v)=>pallete.appendChild(makecolor(v)));
document.body.appendChild(pallete);
const container = document.createElement("section");
container.style.cssText = "display:flex; gap: 10px;";

const makebutton = (coffeeName) => {
    const btn= document.createElement("button");
    btn.innerText = coffeeName;
    return btn;
};

["아메리카노","라떼","민트"].forEach((v)=>container.appendChild(makebutton(v)))

document.body.appendChild(container);
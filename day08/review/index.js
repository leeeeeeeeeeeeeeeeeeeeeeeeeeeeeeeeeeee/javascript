const layout = document.querySelector(".layout");
const makeButton = (className) => `<button class="button ${className}">Button</button>`;

layout.insertAdjacentHTML("beforeend", makeButton("seaBlue"));
layout.insertAdjacentHTML("beforeend", makeButton("deepBlue"));
layout.insertAdjacentHTML("beforeend", makeButton("white"));
layout.insertAdjacentHTML("beforeend", makeButton("ligthBlue"));


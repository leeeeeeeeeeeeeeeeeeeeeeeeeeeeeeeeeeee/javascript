const makeImage =(image) =>
    `
    <div class="image">
        <img src="${image}" ait=""/>
    </div>
  `;
 
const makeInfo = (price, detail) =>
    `
    <div class="info">
        <h5>${price}</h5>
        <span>${detail}</span>
    </div>

`;

 export const makeRoomCard =(image,detail,price)=>
`
    <div class="roomCard">
        ${makeImage(image)}
        ${makeInfo(price,detail)}
    </div>
`;

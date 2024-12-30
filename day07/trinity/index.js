// js로 html,css 만들기
// html: 웹 사이트 구조 파일 
// css: 스타일 + 구조 파일
// html + css : 정적 웹사이트(퍼블리셔) -> 동적
// js: 데이터와 연관된 구조/퍼블리싱 + 이벤트(클릭하기 ,키보드 입력, 터치, 스크롤)

import { data } from "./data.js ";
import { makeRoomCard } from "./func.js";

// -> react[]
// -> angular,vue[]
// 첫번째 문법!
const container = document.querySelector(".container");


//appendChild vs insertAdjacentHTML
// 두번째 문법!
data.forEach((v) => container.insertAdjacentHTML("beforeend",makeRoomCard(v.imgUrlList[0],v.priceTitle,v.roomDesc)));


// skill 함수를 정의하고 

//----------------------
//const triggerSkill = (skill) =>{
  //  console.log("스킬 발동!")

    //console.log("스킬 마무리!")
//};

//const elementSkill = (elemaent) =>{
   // console.log(`${elemaent}모으기`);
   // console.log(`${elemaent}발사`);
//};
// 🧊 ⚡ 🔥
//const skills = ["🧊","⚡","🔥"];
//const skillNumber = Number(prompt("🧊 ⚡ 🔥 중에 어떠한 스킬을 발동할까요?"));
//triggerSkill(()=>elementSkill(skills[skillNumber]));
//--------------------------------------------------------
//const iceSkill = () => {
  //  console.log(" 🧊모으기");
  //  console.log(" 🧊발사");
//};
//const thunderSkill = () => {
  //  console.log(" ⚡모으기");
  //  console.log(" ⚡발사");
//};
//const fireSkill = () => {
  //  console.log(" 🔥모으기");
  //  console.log(" 🔥발사");
//};

//if(skillNumber == 0) {
 //   triggerSkill(iceSkill);
//} else if(skillNumber ==1) {
 //   triggerSkill(thunderSkill);
//} else if(skillNumber ==2) {
 //   triggerSkill(fireSkill);
//} else {
  //  console.log("없음");
//}
// 스킬 발동!~~~ 스킬 마무리!

// 얼음🧊스킬 -> 얼음 모으기, 얼음 발사
// 썬더⚡ 스킬 -> 번개 모으기, 번개 발사
//불 스킬🔥 -> 불 피우기, 불 발사

//유저에게 어떠한 스킬을 발동시킬까요 (1,2,3)
//콘솔로 결과값 나타내기!



//타코 음식 만들기!

//유저에게 타코 메뉴를 선택하고(🦐 ,🥩, 🍗,🧀)

// 요리 하기  함수를 만들기
// 타코 만들기 함수를 만들기(🦐 ,🥩, 🍗,🧀)
// 1. 타코 준비-> 2. 메뉴 넣기 ->3.굽기 ->4.타코 완성
// 준비된 ~~타코가 나왔습니다!

const main =["🦐 ","🥩", "🍗","🧀"]


const cook =(recipe) => {
      console.log("요리 시작!")

      console.log("요리 완료!")

};

const makeTaco =(main)=>{
    console.log("타코 준비!")
    console.log(`${main}넣기`)
    console.log("굽기")
    console.log(`${main}타코 완성!`)
  };
  const menu = Number(prompt("타코메뉴(🦐 ,🥩, 🍗,🧀) 고르세요!"));
  cook(()=>makeTaco(main[menu - 1]));
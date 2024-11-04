const myName="이지현";
const mbti="enfp";

//console.log("저의 이름은 "+myName+"입니다");
// 백틱 사용후 ${} 사용!
//console.log(`저의 이름은 ${myName}입니다.저의 mbti는 ${mbti}입니다.`);

//유저에게 오늘의 요일을 물어보고
//유저에게 오늘 할일을 물어보고
//유저에게 오늘의 기분 물어본 후에
//당신은 오늘~ ~요일에 할일은~~이시군요! 기분이 ~~하시군요!

const day=prompt("오늘은 무슨 요일인가요?");
const what=prompt("오늘은 무엇을 하실 건가요?");
const feel=prompt("오늘의 기분은 어떠신가요?");
alert(`당신은 오늘 ${day}에 할일은 ${what}이시군요!기분이${feel}하시군요! `);

console.log(`당신은 오늘 ${day}에 할일은 ${what}이시군요!기분이${feel}하시군요!` );


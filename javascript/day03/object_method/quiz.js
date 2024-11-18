//유저에게 비밀번호 확인을 입력 받고
const alertMsg ={
    pwshort:"비밀번호가 짧습니다.",
    pwLong:" 비밀번호가 깁니다.",
    pwNotIncludeSpecial:" 반드시 특수 문자가 들어가야 합니다!.",
    pwNotEndZ:"마지막 글자는 z로 끝나야 합니다!",
    pwSuccess:"올바르게 비밀번호 설정 하였습니다!",
};



const pw= prompt("비밀번호 입력");
const isLowerThan4 = pw.length < 4 ;
const isLowerThan12 = pw.length > 12 ;
const hasSpecial = !pw.includes("!")|| !pw.includes("#")|| !pw.includes("@");
const isEndZ     = !pw.endsWith("z");


if(isLowerThan4){
    alert(alertMsg.pwshort);
}else if(isLowerThan12){
    alert(alertMsg.pwLong);
}else if(hasSpecial){
    alert(alertMsg.pwNotIncludeSpecial);
}else if(isEndZ ){
    alert(alertMsg.pwNotEndZ);
}else{
    alert(alertMsg.pwSuccess);
}
// 1. 문자 길이가 4~12글자 사이가 아니면 -> alert 

// 4글자보다 짧으면 비밀번호가 짧습니다.
// 12글자보다 크면 비밀번호가 깁니다.

// 2. 특수문자 !,#,@ 이거 셋중에 하나라도 포함이 안되면
// 특수문자가 반드시 들어가야 합니다!

// 3.마지막 글자가 z 끝나지 않으면
// 마지막 글자는 z로 끝나야 합니다!

// 4. 위 케이스 통과하면
// 올바르게 비밀번호 설정하였습니다!


/*일반함수, 화살표함수*/
//function name(){}
const car ={
    name:"캐스퍼",
    speed: 0,
    color: "white",
    speedUp: function(){
    console.log(" 부릉부릉");
  },
  end: () => {
    console.log("시동끔");
  },
};

const calc = {
    add:function (a, b) {
        return a + b ;
    },
    substract: function (a, b) {
        return a - b;
  },
};

function add1(a, b) {
    return a + b ;
}

function sub(a,b) {
    return a - b;

}

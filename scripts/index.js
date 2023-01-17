//DOM 요소 생성 함수
/*
function domAdd(){
    console.log('domAdd');

}
*/

// 이름 없는 함수는 화살표로 대체 할 수 있다.
// 이름 없는 함수는 변수로 대체 할 수 있다.
// const는 상수를 선언할때 사용한다.
// 기존에는 var을 사용했지만 문제가 많이 생겼다.
// var 대신 let을 사용
// 자바스크립트는 변수를 선언하지 않아도 되지만,
// 최근에는 변수를 선언하는것이 추세이다.
const domAdd = () => {
    //함수를 호출하는것과 동일한효과
    console.log('domAdd');
    const btn1 = document.createElement("button");
    btn1.innerHTML="버튼1";
    btn1.id="bt1";
    btn1.className="btc";
    document.getElementById("content").append(btn1);

    const btn2 = document.createElement("button");
    btn2.innerHTML="버튼2";
    btn2.id="bt2";
    btn2.className="btc";
    document.getElementById("content").append(btn2);

    const btn3 = document.createElement("button");
    btn3.innerHTML="버튼3";
    btn3.id="bt3";
    btn3.className="btc";
    document.getElementById("content").append(btn3);
}

//dom 요소 접근
const domRead = () =>{
    const btc = document.querySelectorAll(".btc");
    console.log(btc);
    //for 순회
    console.log("** for **");
    for(let i=0; i<btc.length; i++){
        console.log(btc[i]);
    }
    //for...in 순회
    console.log("**for in**")
    for(let k in btc){
        console.log(btc[k]);
    }
    //foreach
    console.log("**foreach**");
    btc.forEach((item,k) => console.log(item, k))


    //for ...of
    console.log("**for of"**"");
    for(let[k,item] of btc.entries()){
        //item은 변수명으로 다른 변수명으로 사용해도된다.
        console.log(k, item.innerHTML );
        if(k == 1 ) break;
        //키값을 찾을때 많이 사용한다.(in 보다 of를 권장)
        
    }


}



//자바스크립트 렌더링 제어
document.addEventListener("DOMContentLoaded", () =>{
    //DOM 요소 생성
    domAdd();

    //dom 요소 접근
    domRead();
});

    





let ID = document.getElementById(L1)
let Btt = document.getElementById(button)
let Div = document.getElementById(Area)

Btt.addEventListener('click',function(){//괄호 안의 내용 = 어떻게 실행할 것인가에 대한 내용
    let adlist = document.createElement("li"); //괄호 안에 있는 형식을 추가
    adlist.innertext = input.value;
    Area.appendchild(adlist);
}) 

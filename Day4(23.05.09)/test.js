let Btt = document.getElementById("button"); //id를 받아와서 처리하는 방법
let Div = document.getElementById("Area");
let input = document.getElementById("input");

Btt.addEventListener("click", function (e) {
    if(input.value == "" || !input.value)
        alert("비어 있어요");
    else{
    e.preventDefault()
  //괄호 안의 내용 = 어떻게 실행할 것인가에 대한 내용
  let addlist = document.createElement("li"); //괄호 안에 있는 형식을 추가
  addlist.innerText = input.value; //글씨 저장 후 아래쪽에 저장
  
  Div.appendChild(addlist);}

});

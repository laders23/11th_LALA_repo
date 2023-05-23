let Btt = document.getElementById("button"); //id를 받아와서 처리하는 방법
let Delete_B = document.getElementById("delete_button");
let Div = document.getElementById("Area");
let input = document.getElementById("input");

Btt.addEventListener("click", function (e) {
    let i = 0;
    e.preventDefault(); //새로고침을 방지할 수 있도록 -> test용

    //괄호 안의 내용 = 어떻게 실행할 것인가에 대한 내용
    let list = document.createElement("li"); //괄호 안에 있는 형식을 추가
    let Button = document.createElement("button");
  if (input.value == "" || !input.value) alert("비어 있어요");
  else {
    Div.id = "test";
    list.id = i++;
    Button.textContent = "삭제";
    list.innerText = input.value; //글씨 저장 후 아래쪽에 저장
    Div.appendChild(list);
    Div.appendChild(Button);
    Button.addEventListener("click",function(e){
      Div.removeChild(list);
      Div.removeChild(Button);
    });
    input.value = "";
    }
});

function allClearList(e){
  if(confirm("정말 삭제하시겠습니까?")==true){ //취소메시지가 true(ok)일때
      if(Div.innerText==''){                      //목록칸이 비어있다면
          alert("삭제할 목록이 없습니다");            //삭제할 목록이 없다는 경고창뜨기
      }else{                                         //삭제할 목록이 있다면
          Div.innerText='';                       //전체 삭제
      }
  }else{                                      //취소메시지가 false(no)일때
      return false;                           //삭제 취소
  }
}
//화살표 함수
/* 
(a,e) => {};
 */
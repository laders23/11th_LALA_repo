# CSS Biginner

## CSS 적용

- 일반적으로 CSS파일 이름은 Style.css로 지정

```HTML
<!DOCTYPE html>
<html lang = "ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE-edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>

    <link rel = "stylesheet" href="./style.css">

</head>
<body>
    <h1>멋쟁이사자처럼</h1>

</body>
</html>
```

위 코드에서 <link 부분이 css의 경로를 지정해 불러와줄 수 있는 코드>

---

## CSS의 구성(1)

### Box-Sizing

- 박스에 적용된 사이즈의 기준 정하기

```HTML
div{
    box-sizing: content-box;
}
```

- 요소 사이즈에 패딩, 테두리 포함 X
- border-box
  - 태두리를 기준으로 박스 사이즈를 정함
  - 요소 사이즈에 패딩 및 테두리 포함 O
  - ex) width: 100px; padding : 10px; --> 생각했던 요소의 크기 자체가 100px

---

## CSS 구성(2)

### CSS의 기본 구조

```HTML
h1{
    color: brown;
}
```

- 선택자(selector) : 어떤 HTML요소에 스타일을 적용할 지 결정 (태그)
- 속성(property) : 스타일을 부여할 항목 ex)color
- 값(value) : 속성에 대한 값 ex)brown
- 선언(declaration) : 속성 + 값 조합
- 규칙(rule) : 선택자 + 선언부 조합

---

### CSS 선택자

- 요소 전체에 적용 : Universal
  - \*
  - 남용 X -> 부분적 수정에서 굉장히 불편 --> 따라서, 클래스별로 쪼개서 사용하는 것을 권장
- 특정 태그 전체에 적용
  ex)
  ```CSS
  h2{
      color: brown;
  }
  ```
- 여러 종류 태그에 적용
  ex)
  ```CSS
  h2,p{
      color: brown;
  }
  ```
- 특정 클래스에 해당되는 요소에 대해 적용
  ex)
  ```CSS
  .coding{
      color: brown;
  }
  ```
- 특정 클래스가 명시된 특정 태그에 대해 적용
  ex)
  ```CSS
  h2.coding{
      color: brown;
  }
  ```
- 특정 아이디에 해당되는 요소에 대해 적용
  ex)
  ```CSS
  #original{
      color: brown;
  }
  ```
  - 현재의 경우에는 잘 사용하지 않는 방법 중 하나
- 특정 아이디가 명시된 특정 태그에 대해 적용
  ex)
  ```CSS
  h2#original{
      color: brown;
  }
  ```
- 부모 요소 내의 특정 자식 요소
  ex)
  ```CSS
  div p{
      color: brown;
  }
  ```

### CSS 주석

ex)

```CSS
    /* h2{
        color: brown;
    }*/
```

---

## CSS 특성

- 폭포수 (Cascading)
- 상속
- 우선순위

### 폭포수(Cascading)

- 중복으로 선언되어 있다는 전재 하에, 같은 태그에 대한 규칙이 있는 경우 마지막으로 작성된 규칙이 적용됨

ex)

```CSS
h1{
    color: brown;
}
h1{
    color: red;
}
```

실제 적용 시)

```CSS
/* h1{
    color: brown;
}*/
h1{
    color: red;
}
```

### 상속(Ingeritance)

- 부모 요소의 CSS규칙을 자식 요소가 상속하여 적용

ex)

```HTML
<div>
    <p class = "coding">즐거운 코딩</p>
    <h2 clsss = "coding">멋쟁이사자처럼 스쿨</h2>
    <h2>오리지널 클래스</h2>
</div>
```

```CSS
div{
    color: brown;
}
```

- 단, 자식 요소가 CSS 규칙을 가진 경우에는 이를 우선하여 적용

### 우선순위(Specificity)

- CSS 규칙이 서로 충돌할 때 어떤 것을 적용 할것인가
  - HTML요소 -> id로 선택된 요소 -> class로 선택된 요소 -> 태그의 이름으로 선택된 요소

---

## CSS Box

### Inline vs Block

- inline
  - 한 줄에 표시
  - \<a>, \<img>, \<span>
  - 태그로 감싸진 내용만큼만 영역을 차지
  - width와 height로 요소의 크기 조절 X
  - inline은 좌우 margin, padding만 적용 가능
- Block

  - 개별 요소마다 줄을 바꿈
  - \<h1>, \<p>, \<div>
  - width와 height로 요소의 크기를 조절
  - 내용과 별개로 자신의 영역을 가짐

- Block이 가지지만, inline은 가질 수 없는 것

  - width, height, margin, padding
    - inline = 좌우 margin, padding만이 적용 가능
    - inline에 적용되는 것 처럼 보이는 상하 padding은 레이아웃에 영향을 미치지 못함
      - 즉 padding만큼 상하 요소들을 밀어내거나 할 수 없음

- inline-block
  - inline과 block의 특징을 모두 포함
  - 줄을 바꾸지 않음
  - block 처럼 width, height를 가짐
  - 상하 margin, padding이 레이아웃에 유효

### Box Model

- Block Box가 가지는 기본 모델

  - 내용(content)
  - 패딩(padding)
  - 테두리(border)
  - 여백(margin)
  - 너비(width)
  - 높이(height)

- 여백(Margin)

  - 상하좌우 전체 적용

  ```CSS
  div{
      margin: 20px;
  }
  ```

  - 상하/좌우 따로 설정

  ```CSS
  div{
      margin: 20px 30px;
  }
  ```

  - 상/우/하/좌 따로 적용

  ```CSS
  div{
      margin: 20px 10px 20px 10px;
      /* 위쪽부터 시계방향으로 이동 */
      /* div{
          margin-top: 20px;
          margin-right: 10px;
          margin-bottom: 20px;
          margin-left: 10px;
      } */
  }
  ```

- 테두리(Border)

  - 내용을 둘러싼 테두리

  ```CSS
  div{
      border: 6px solid blue;
      /* 6px 두께, 실선, 파란색 */
      /* 두께, 유형, 색상 적용이 가능 */
  }
  ```

  - 나눠 표현한 경우

  ```CSS
  div{
      border-width: 6px;
      border-style: solid;
      border-color: blue;
  }
  ```

- 패딩(Padding)

  - 내용으로부터 테두리까지의 거리

  - 상하좌우 전체 적용

  ```CSS
  div{
      padding: 4px;
  }
  ```

  - 상하/좌우 따로 적용

  ```CSS
  div{
     padding: 4px 6px;
  }
  ```

  - 상/우/하/좌 따로 적용

  ```CSS
  div{
     padding: 4px 6px 4px 6px;
     /*
     padding-top: 20px;
     padding-right: 10px;
     padding-bottom: 20px;
     padding-left: 10px;
          */
  }
  ```

---

## CSS 단위

- 스크린 환경에 적합한 단위

  - px
  - %
  - rem / em

- px
  - 스크린을 구성하는 작은 점
    - 다른 요소간에 관계를 지켜야만 올바른 레이아웃을 가질 수 있기 때문에 비율단위을 많이 사용
- %

  - 비율을 기준으로 값을 설정하는 단위
  - 부모의 요소의 크기를 따라 비율단위로 설정되는 점이 특징

- rem / em

  - em : 부모 요소의 폰트크기를 기준
  - rem: 루트 요소의 폰트 크기
  - 폰트 크기에 비례하여 크기 설정
    - 상위 요소(부모 요소)의 크기 값에 em값을 곱하는 방식으로 해당 클래스의 크기를 결정
  - 요소간의 복잡한 위계관계에서 상위 요소를 일일히 정한다는 것은 굉장히 까다롭고 복잡하기 때문에 rem사용
    - 따라서, 통일된 기준을 잡기 위해서는 rem 단위를 사용하는 것을 권장

- vw / vh
  - 각 디바이스별 화면의 너비 / 높이를 기준으로 배율 설정
  - v(viewport)
  - ex) 내가 지금 보고 있는 브라우저 영역을 항상 꽉 채우는 요소
    ```CSS
    div.expand{
        height: 100vh;
    }
    ```
    - 하단에 다른 요소가 있다고 하더라도, 스크롤 하지 않는 이상 확인할 수 없음

---

## 이미지 다루기

```HTML
<div class = "container">
    <img
        src="이미지 경로"
        alt="대체 문구"
    >
</div>
```

- 이미지 단독 사용 X / div로 마크업 후 사용하는 것이 사진을 다루기에 용이

```CSS
img{
    max-width: 100%;
    /* 부모 영역에서 벗어나지 않도록 이미지의 너비 상한선을 100%로 설정 */
    object-fit: cover;
    /*부모 요소의 가운데로 정렬되는 특징 또한 있음
    cover : 이미지를 부모 요소의 영역 크기 만큼 확대/축소하여 채움
    contain : 이미지의 비율을 유지하면서 크기를 변경하여 부모 요소를 채움
    fill : 이미지의 비율을 유지하지 않고 부모 요소의 크기에 맞게 변경하여 채움

    */
}
```

---

## Overflow

```HTMl
<div class="overflow">
    CSS<br>IS<br>AWESOME
    </div>
```

```CSS
div.overflow{
    border: 2px solid black;
    width: 180px;
    font-size: 50px;
    overflow: hidden
    /*
    hidden: 넘친 content에 대해서 숨김 표시
    scroll: 가로세로 스크롤이 가능
    이 때, overflow-x: scroll; 가로 / overflow-y: scroll; 세로
    auto: 가로가 넘치면 가로 스크롤, 세로가 넘치면 세로 스크롤 생성 <보편적으로 운영체제마다 해석하는 방식이 다를 수 있어서 auto를 주로 사용>
    */
}
```

---

## 폰트 꾸미기

```HTML
<div class="container">
    <p>Hello :)</p>
</div>
```

```CSS
html{
    font-size: 10px;
}
p{
    color: pupple;
    /*
    color: #0080000;
    Hex color: RED/GREEN/BLUE의 값을 각각 16진수로 나타내어 조합하는 색상
    */
    font-size : 0.5rem; /* html의 전체 폰트가 10px 이기 때문에 해당 값에 따라 조절됨 */
    font-style: italic; /* 특정 문장만 이텔릭을 주고 싶다면 span태그 사용 */
    font-weight: bold; /* 폰트를 굵게, 얇게 등 100~900 까지의 값으로 설정할 수 있기도 함
    Thin: 100 / Extra Light: 200 / Light: 300 / Normal: 400 /
    Medium: 500 / Semi Bold: 600 / Bold: 700 / Extra Bold: 800 / Black: 900
    */
    text-decoration: underline; /* 밑줄 넣기 */

   /*a태그 처럼 링크의 경우 색상이 파란색이고 밑줄이 있는 경우 수정할 수 있는 속성 */
    text-decoration: none; /* 밑줄 삭제 */
    a:link{
        color: black;
    }/* 클릭한 적이 없는 링크 */
    a:visited{
        color: black;
    }/* 방문했던 링크 */
}
```

---

## 테두리 꾸미기

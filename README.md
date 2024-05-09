# SPAM-Web-Basic

첫 번째 커밋이다~!

1.html,css,js
html:뼈대 역할
css:살 역할
js:기능(장기?) 역할

2.Library
Library:남이 작성한 코드
많은 라이브러리들이 있다. ex)npm,bundling tool

3.nodejs
nodejs:웹브라우저에서만 쓸 수 있는 js를 아무데서나 실행 할 수 있게 하는 js실행 엔진

4.bundling tool
bundling tool:여러 복잡한 구조들의 js 파일을 하나의 파일로 합쳐 줄 수 있고 안쓰는 함수 변수 제거,최신 문법을 호환성 좋게 바꿔줌. .ts.vue.jsx등으로 개발한거 .js로 바꿔준다.

4.build
build:개발이 끝나고 하나의 파일로 합칠 때 쓸 수 있는 것

5.SPA(Single Page Application)
SPA:웹 화면을 모바일 앱처럼 새로고침없이 부드럽게 동작하는 사이트를 만드는 것 (Vue,Svelte,React,Angular등의 라이브러리로 사용)
SPA의 단점:수많은 변수들을 관리하기 어려움(변수관리를 쉽게 해주는 라이브러리로 해결가능),구글검색결과 노출 어려움,첫 페이지 로딩시간이 길다.(server-sider rendering으로 해결 가능)

server-sider rendering:html을 서버에서 만들어서 보내줌
client side rendering:html 생성,조작을 js로 하는 것

6.meta framework
meta framework:자바스크립트 문법으로 풀스택 개발 가능한 라이브러리

7.TypeScript
TypeScript: 타입기능이 업그레이드 된 자바스크립트

8.serverless
serverless:서버역할을 대신 해주는 서비스

p태그

- 1번
- 2번
- 3번

### 수업

# javaSript 공부

## 실행하는 법

실행문법은 js파일에

```javascript
console.log("Hello World");
```

이런 식으로 치고
html 파일에 바디 밑에 script:src라는 단축어 를 써서 ""안에 /js/파일이름을 쓸 수 도 있고 백엔드에선 html 파일에 바디 밑 스크립트 안에

```javascript
console.log("Hello World!");
```

이런 식으로 실행 하면 되고
터미널에 node app.js를 써서 확인하거나 라이브서버에서 f12를 눌러서
콘솔창을 봐서 확인할 수 있는게 정석적인 루트이고 또 다른 루트는 확장에서 coderunner이라는 프로그램을 설치해서 run code버튼을 통해 확인 할 수 있다.

### 수업

# html 과 css 연결

## 연결하는 법

html 파일의 `<head>` 안에 `<link>`라는 단축키를 써서 herf= 에 css주소를 집어 넣으면 된다.
그리고 css로 html에 속성을 넣기 위해서는 class와id 속성이 있다.
class는 html 파일 `<body>` 안에 `<div>`,`<h1>`등 안에 class 자동완성 한 담에 class=에 내용, >와 `</div> `사이에 클래스 이름을 쓰면
된다.
그리고 지정한 주소의 css에 .(class속성에넣은 내용)을 쓰고 대괄호 안에 back자동완성 첫번째로 색을 입힐 수 있다.

id는 class 와 똑같지만 id 자동완성 하고 내용,이름 까지 똑같다.  
id도 css에 #(id속성에 넣은 내용)쓰고 난 후에는 class 태그와 똑같다.

### 수업

# JavaScript 변수와 자료형

## 변수를 저장하는 법

변수선언규칙:camel표기법, 숫자,$, \_만 가능
첫글자는 숫자 불가
예약어 불가
협업 시 잘 이해될 수 있도록 규칙에 맞춰서 작성.
ex) 명사라면 data, 동사라면 true/false 등

### var

재선언 가능, 재할당 가능, 호이스팅, 전역변수
호이스팅:밑에서 선언한 변수를 위에서도 쓴다

### let

재선언 불가능,재할당 가능,블록범위 변수

### const

재선언 불가능, 재할당 불가능, 상수

## 자바스크립트의 자료형

1.숫자(numbuer):정수 및 부동 소수점

2.문자열(string):텍스트

3.불리언(Boolean):true 또는 false

4.null:값이 존재하지 않음

5.undefined:변수가 초기화되지 않았거나 값이 할당되지 않았음

6.심벌(Symbol):고유하고 변경 불가능한 데이터 유형

7.객체(Object):복합 데이터 유형으로, 여러 속성과 매서드를
포함

8.배열(Arry):여러 값을 순서대로 저장하는 데이터 유형

9.함수(Function):코드 블록을 정의하고 실행 할 수 있는 데이터 유형

### 수업

# JavaScript의 if 문과 switch,case

javaScript는 변수를 선언 할 때 타입을 적지 않아서

```javascript
const PI = 3.14;
console.log(3.14 == "3.14");
```

라고 하면 true로 알아 듣기 때문에 타입까지 구분 가능한 ===을 써야한다.
switch는 경우의 수를 두고 그 경우 일때 출력을 할 수 있는데
break와 continue 로 계속 실행을 하거나 멈추게 할 수 있다.
그리고 경우의 수가 아닌 나머지 값들은 default로 처리 할 수있다.

### 변수형 참고

변수를 저장하고 출력 할 때 \`${}` 로 간편하게 할 수 있다.

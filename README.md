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

### 수업

# JavaScript의 while문과 for문

while 문은 조건식이 참일 경우 계속 반복하고 거짓일 경우 중단한다.

for 문은 조건식이 참일 경우 반복하고 증감식을 실행하고
거짓일 경우 중단한다.

## while문 예시 (구구단)

```javascript
let i = 1;
while (i <= 9) {
  console.log(`2 * ${i} = ${2 * i}`);
  i++;
}
```

조건식 -> 실행문

## for문 예시 (구구단)

```javascript
for (let i = 1; i <= 9; i++) {
  console.log(`2* ${i} = ${2 * i}`);
}
```

조건식 - > 실행문 -> 증감식

### 수업

# array

array 는 변수 자료형중 하나인데 순서가 있는 데이터 묶음이다

예)속성값1,속성값2,속성값3,속성값4...
array의 데이터는 0부터 시작한다.

그리고 자료형을 섞어 사용할 수있다.

또한 for문으로 활용 할수 있다.

예시 )

```javascript
for (let arg of array) {
  console.log(arg); // 출력값: 1 2 3 4 5 6 7 8 9 10
}
```

# object

object는 키값으로 묶은 데이터 묶음이다
예) 키값1:데이터:1,키값2:데이터:2...

배열과 마찬가지로 모든 자료형을 같이 쓸 수 있다.

# object 와 array

object와 array는 같이 쓸 수 있는데
예를 들어

```javascript
const students = [
  { name: "준석", age: 17 },
  { name: "준영", age: 17 },
  { name: "승원", age: 17 },
  { name: "윤솔", age: 17 },
  { name: "예건", age: 17 },
];
```

이런 식으로 쓰면 array와 object를 함께 쓰는 것이다.

# 함수

함수는 코드를 재사용할 수 있고 다른 인자를 사용하여 동일한 코드를 여러번 사용 할 수 있다.

특징으로는 변수안에 담길수 있고 객체의 속성안에 method로 담길 수 있다.

배열의 값으로도 사용 할 수 있다는 특징이있다.
함수는

```js
function 함수이름(함수값1,함수값2...){
  console.log(함수값1,함수값2);
}
함수이름(입력값1,입력값2)
```

위 코드 처럼 사용하면
입력값이 출력된다.

또다른 예시로는 계산기가 있는데
덧셈 계산기 코드를 짜보면

```js
function plus(a, b) {
  console.log(a + b);
}
plus(3, 3);
```

이렇게 코드를 짠다면 6이 출력되는걸 볼 수있다.

### 수업

## 백엔드 개발이란

서버 사이드 프로그램을 디자인 하고,개발하고,유지보수를 하는 개발

## 통신방법

Frontend(Web,Mobile,desktop) <----> Backend(APi server,DataBase,
Infrastructure)

### 백엔드의 구분방법

API Server Database Infrastructure가 있다.

API Server는 프론트엔드와 백엔드 또는 백엔드 끼리 연결을 가능하게 해주는 영역,

Database는 데이터 저장소,

Infrastructure는 백엔드를 실행하는 하드웨어를 관리하는 영역이다.

## API

API는 메뉴판 같은것고 식당과 손님이 음식을 주고받기 위한 방법은 코드라고 생각하면 된다.

### API가 가져야할 내용

1.method:데이터를 달라고할것이냐 보낼것이냐? 같은 요청방식

2.endpint: 어떤 데이터를 요청할 것이냐

3.parameter: 자료 요청에 필요한 추가정보(아이디,웹툰제목 등)

## Rest (REprentational State Transfer)

Rest는 자원을 이름으로 구분하여 해당 자원의 상태를 주고받는 모든 것

### 백엔드의 모든 프로그램은 CRUD로 이루어져있다.

C:creat (데이터 생성)

R:read (데이터 조회)

U:update (데이터 수정)

D:delete (데이터 삭제)

### HTTP 메소드의 순서

GET-데이터조회

POST- 데이터 생성

PUT - 데이터 부분 수정

Patch - 데이터 전체 수정

Delete - 데이터 삭제

## RestAPI

HTTP URL를 통해 Resource를 명시하고,HTTP Method를 통해 해당 URL에 대한 CRUD를 적용하는 것이다.

### REST API 원칙

1.동사를 사용하지 않고,소문자를 사용하여야 한다.

2.URL 마지막에 '/'를 포합하지 않는다.

3.'\_'대신 '-'를 사용한다.

4.파일 확장자는 URL에 포함하지 않는다.

## DataBase

구조화된 정보 또는 데이터의 모음이 데이터베이스이다.

### DataBase의 종류

RDB:관계형 데이터베이스(ORACLE,MYSQL)

NOSQL DB:SQL을 쓰지 않는 데이터베이스(키값,도큐먼트 등이있다.)

## 서버의 구조

Controller- 직접적으로 메소드를 정해서 URL로 통신하는 곳

Service- 통신하며 사용할 로직을 적는 곳

Repository- 데이터베이스를 연결하고,데이터를 저장하는 곳

Entity- 데이터의 구조를 잡아 구조체를 저장하는 곳

## Infrastructure

Infrastructure 개발자 = DevOps개발자

주로 소프트웨어 및 하드웨어 시스템의 기본 구조 및 기반을 설계,구축,유지보수를 하는 개발자

AWS,Azure,GCP에 백엔드나 프론트 프로그램을 올리고, CI/CD를 하는 것

### CI/CD

지속적 통합(Continuous Integration) 및
지속적 제공/배포(Continuous Delivery/Deployment) 를 의미하며,
소프트웨어 개발 라이프사이클을 간소화하고 가속화하는 것

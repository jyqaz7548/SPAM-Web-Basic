function errorCode() {
  console.log("404");
}

errorCode(404);

function sayHello(name) {
  console.log(`${name}`, "님 안녕하세요");
}
sayHello("유준영");

function addNumber(a, b) {
  return a + b;
}

const num = addNumber(5, 6);
console.log(num);

console.log(addNumber(5, 6));

let a = 20;

function varDas() {
  let a = 10;
  //지역변수
}

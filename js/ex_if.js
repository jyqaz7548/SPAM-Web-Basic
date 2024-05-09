const name = "John";
const age = 19;

if (name === "TOM" && age > 19) {
  console.log("You died");
} else {
  console.log("See you next time");
}

if (name === "TOm" || age > 19) {
  console.log("너 뒤짐 ㅅㄱ");
} else {
  console.log("넌 담에 뒤질 듯");
}
// Mike 그리고 미성년자 둘다 만족해야함
if (name === "John" && age < 20) {
  console.log("You died");
} else {
  console.log("See you next time");
}

let isAdult = age > 19;
if (isAdult) {
  console.log("성인 입니다.");
}

if (!isAdult) {
  console.log("미성년자 입니다.");
}

// 스팸부원들을 배열에 저장
// 스팸 부원에는 role(차장,부장,부원), name(이름),grade(학년)
//부장 정현서, 차장 국재윤
// 부원 1학년만
//for,if 문을 사용해서 부원만 출력하기

const spam = [
  { name: "정현서", role: "부장", grade: 3 },
  { name: "국재윤", role: "차장", grade: 3 },
  { name: "이준석", role: "부원", grade: 1 },
  { name: "유준영", role: "부원", grade: 1 },
  { name: "이윤솔", role: "부원", grade: 1 },
  { name: "장승원", role: "부원", grade: 1 },
  { name: "최예건", role: "부원", grade: 1 },
  { name: "이우혁", role: "부원", grade: 1 },
  { name: "장우진", role: "부원", grade: 1 },
];

for (let student of spam) {
  if (student.role == "부원") {
    console.log(student);
  }
}

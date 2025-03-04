const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
// ? 일단 사용한다는 뜻의 파일 리딩

// app.get("/", (req, res) => {
//   let test = path.join(__dirname, 'public', 'index.html')
//   res.sendFile(test);
//   // ? 파일 가져오기

// });

app.listen(3000, () => {
  console.log('http://localhost:3000/')
})
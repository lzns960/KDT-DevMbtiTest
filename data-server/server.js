const express = require('express');
const cors = require('cors'); // 미들웨어에 끼워서 다른 포트번호여도 거부하지 않도록 하기

const PORT = 3001; // 3306은 mySQL이 쓴다.
const app = express();

app.use(express.json()); // bady-parser 사용
app.use(express.urlencoded({ extended: false })); // bady-parser 추가 설정 false
app.use(cors());

/* 라우팅 */
const dataRouter = require('./routes/data');
const mongoRouter = require('./routes/mongo');

/* 모듈 설정 */
app.use('/data', dataRouter); // 주소 값 /data면 dataRouter 모듈이 처리한다.
app.use('/mongo', mongoRouter);

app.listen(PORT, () => {
  console.log(`데이터 통신 서버가 ${PORT}에서 작동 중`);
});

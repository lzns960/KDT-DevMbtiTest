const connection = require('../dbConnect');

const db = {
  // db와 소통하는 메소드들
  // geteCounts: 접속했을 때 visitor가 몇이나 들어오는지 get하는 함수
  getCounts: (cb) => {
    connection.query('SELECT counts FROM mydb.visitor;', (err, data) => {
      if (err) throw err;
      cb(data);
    });
  },
  // mbti를 끝냈을 때 추가되는 함수
  incCounts: (cb) => {
    connection.query(
      'UPDATE mydb.visitor SET counts = counts + 1 WHERE id = 1;',
      (err) => {
        // 업데이트문은 data를 받아올 필요가 없다. 그래서 err만 보낸..
        if (err) throw err;
        cb(JSON.stringify('업데이트 성공')); // 통신 성공메세지= 백과 프론트가 통신할 때 JS가 아니라 JSON으로 소통하기 때문에 JSON으로 보내야한다.
      }
    );
  },
};
module.exports = db;

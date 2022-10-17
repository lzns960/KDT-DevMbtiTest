const express = require('express');
const router = express.Router();

const db = require('../controllers/dataController');

// 주소별로 처리
router.get('/counts', (req, res) => {
  // 카운트 값 받기
  db.getCounts((data) => {
    res.send(data);
  });
});

router.post('/inccount', (req, res) => {
  // +1 추가하기
  db.incCounts((msg) => {
    res.send(msg);
  });
});

router.get('/survey', (rea, res) => {
  db.getSurvey((data) => {
    console.log(data);
    res.send(data);
  });
});

router.get('/explanation', (rea, res) => {
  db.getExplanation((data) => {
    console.log(data);
    res.send(data);
  });
});
module.exports = router;

import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import BlueButton from './BlueButton';
import { next, init } from '../store/modules/mbti';
import { useEffect, useState } from 'react';

export default function Start() {
  const [counts, setCounts] = useState(0);
  const dispatch = useDispatch();

  function makeData(survey, explanation) {
    const initData = { survey: [], explanation: {} };
    if (initData.survey.length === 0) {
      for (let i = 0; i < survey.length; i = i + 2) {
        initData.survey.push({
          // 객체를 push(배열은 이미 만들어졌음)
          question: survey[i].QUESTION_TEXT,
          answer: [
            {
              text: survey[i].ANSWER_TEXT,
              result: survey[i].RESULT,
            },
            {
              text: survey[i + 1].ANSWER_TEXT,
              result: survey[i + 1].RESULT,
            },
          ],
        });
      }
      for (let i = 0; i < explanation.length; i++) {
        initData.explanation[explanation[i].MBTI_TYPE] = {
          explanation: explanation[i].EXPLANATION,
          img: explanation[i].IMG_SRC,
          emoji: explanation[i].EMOJI,
          subText: explanation[i].SUB_TEXT,
        };
      }
    }
    return initData;
  }

  async function sqlFetchData() {
    /* Counts 값 받기 */
    const resCount = await fetch('http://localhost:3001/data/counts');
    if (resCount.status === 200) {
      const num = await resCount.json();
      if (num[0].counts !== 0) setCounts(num[0].counts);
    } else {
      throw new Error('통신 이상');
    }

    /* Survey 값 받아오기 */
    const resSurvey = await fetch('http://localhost:3001/data/survey');
    // 결과값이 resSurvey에 담긴다.
    if (resSurvey.status === 200) {
      // status 통신 성공확인
      const surveyData = await resSurvey.json();
      // json으로 전달된 값을 JS로 맞게 변경시켜줌 => 해당 작업시간 걸리니까 await 걸어줘야함

      /* explanation 값 받아오기 */
      const resExplanation = await fetch(
        'http://localhost:3001/data/explanation'
      );
      if (resExplanation.status === 200) {
        const explanationData = await resExplanation.json();
        const madeData = makeData(surveyData, explanationData);
        dispatch(init(madeData));
      } else {
        throw new Error('통신이상');
      }
    } else {
      throw new Error('통신이상');
    }
  }

  async function mongoFetchData() {
    const resCount = await fetch('http://localhost:3001/mongo/count');
    if (resCount.status === 200) {
      const num = await resCount.json();
      if (num[0].counts !== 0) setCounts(num[0].counts);
    } else {
      throw new Error('통신 이상');
    }

    /* 설문 전체 데이터 받아오기 */
    const resData = await fetch('http://localhost:3001/mongo/getdata');

    if (resData.status === 200) {
      const data = await resData.json();
      console.log(data);
      if (data[0].survey.length !== 0) {
        dispatch(init(data[0]));
      }
    } else {
      throw new Error('통신이상');
    }
  }

  /* 시작 페이지에서 데이터 받기 */

  useEffect(() => {
    //sqlFetchData();
    mongoFetchData();
  }, []); // counts가 변경될 때마다 랜더링(useEffect)

  return (
    <>
      <Header>Dev MBTI Test</Header>
      <MainImg src="/images/main.jpg" alt="메인 이미지" />
      <SubHeader>
        개발자가 흔히 접하는 상황에 따라서 MBTI를 알아 봅시다!
        {'\n\n'}
        지금까지 {counts} 명이 참여해주셨습니다 👏
      </SubHeader>
      <BlueButton text="Start" clickEvent={() => dispatch(next())} />
    </>
  );
}

const Header = styled.p`
  font-weight: bold;
  text-shadow: 2px 4px 5px #999;
  font-size: 3em;
`;
const MainImg = styled.img`
  width: inherit;
`;
const SubHeader = styled.p`
  font-size: 1.5em;
  color: #777;
  margin: 2em 0 2em 0;
`;

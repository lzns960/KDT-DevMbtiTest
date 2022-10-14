import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import BlueButton from './BlueButton';
import { next } from '../store/modules/mbti';
import { useEffect, useState } from 'react';

export default function Start() {
  const [counts, setCounts] = useState(0);
  const dispatch = useDispatch();
  /* 시작 페이지에서 데이터 받기 */
  useEffect(() => {
    async function fetchData() {
      const resCount = await fetch('http://localhost:3001/data/counts');
      if (resCount.status === 200) {
        const num = await resCount.json();
        if (num[0].counts !== 0) setCounts(num[0].counts);
      } else {
        throw new Error('통신 이상');
      }
    }
    fetchData();
  }, [counts]); // counts가 변경될 때마다 랜더링(useEffect)

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

import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import BlueButton from './BlueButton';
import { reset } from '../store/modules/mbti';

export default function Show() {
  const result = useSelector((state) => state.mbti.mbtiResult);
  const explaination = useSelector((state) => state.mbti.explaination[result]);
  const dispatch = useDispatch();

  return (
    <>
      <Header>당신의 개발자 MBTI 결과는?</Header>
      <Explaination>{explaination.text}</Explaination>
      <Result>{result}</Result>
      <AdditionalImg src={explaination.img} alt="memoji" />
      <Additional>재미로 보는 이모지 MBTI 해석</Additional>
      <AdditionalEmoji>{explaination.emoji}</AdditionalEmoji>
      <AdditionalSubText>{explaination.subText}</AdditionalSubText>
      <BlueButton text="다시 검사하기" clickEvent={() => dispatch(reset())} />
    </>
  );
}

const Header = styled.p`
  font-size: 3em;
  margin: 0;
`;
const Explaination = styled.p`
  font-size: 1.5em;
  color: #777;
`;
const Result = styled.p`
  font-size: 3em;
  font-weight: bold;
  color: #0b5ed7;
  text-shadow: 2px 4px #d9dddc;
  margin: 1em 0 0.5em 0;
`;
const Additional = styled.p`
  font-size: 2em;
  // color: #ffc107;
  background-image: linear-gradient(
    90deg,
    red,
    orange,
    yellow,
    green,
    blue,
    navy,
    purple
  );
  -webkit-background-clip: text;
  color: transparent;
  margin: 0.5em 0 0.5em 0;
  transform: translateY(-20px);
`;
const AdditionalImg = styled.img`
  width: 300px;
  transform: translateX(10px) translateY(-20px);
`;
const AdditionalEmoji = styled.p`
  font-size: 2em;
  margin: 0;
`;
const AdditionalSubText = styled.p`
  font-size: 1.5em;
  color: #444;
`;

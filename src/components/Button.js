import styled from 'styled-components';

const MyButton = styled.a`
  position: relative;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  text-decoration: none;
  line-height: 1.6em;
  font-size: 1.2em;
  padding: 0.5em 1em;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.mainColor};
  border: 2px solid ${(props) => props.subColor};
  border-radius: 0.5em;
  user-select: none; // 마우스 드래그안되게 하는 요소
  transition: transform 0.15s ease-out;
  transform-style: preserve-3d;
  margin-top: 1em;
  width: 400px;

  /*&::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    right: 0;
    background: ${(props) => props.subColor};
    border-radius: inherit;
    box-shadow: 0 0 0 2px ${(props) => props.subColor};
    transform: translate3d(0, 0.45em, -1em);
    transition: transform 0.15s ease-out;
  }*/
  &:hover {
    background: ${(props) => props.hoverColor};
    color: ${(props) => props.hoverTextColor};
    transform: translateY(0.25em);
  }
`;
export default function Button({
  text,
  clickEvent,
  mainColor,
  subColor,
  hoverColor,
  textColor,
  hoverTextColor,
}) {
  return (
    <MyButton
      onClick={clickEvent}
      mainColor={mainColor}
      subColor={subColor}
      hoverColor={hoverColor}
      textColor={textColor}
      hoverTextColor={hoverTextColor}
    >
      {text}
    </MyButton>
  );
}

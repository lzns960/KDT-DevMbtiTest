import Button from './Button';

export default function BlueButton({ text, clickEvent }) {
  return (
    <Button
      text={text}
      clickEvent={clickEvent}
      mainColor="#0b5ed7"
      subColor="#D9DDDC"
      textColor="white"
      hoverColor="white"
      hoverTextColor="#0b5ed7"
    />
  );
}

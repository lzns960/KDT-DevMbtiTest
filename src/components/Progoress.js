import styled from 'styled-components';

export default function Progress({ page, maxPage }) {
  return (
    <MyProgress>
      <div>
        {page} / {maxPage}
      </div>
      <Fill>
        <Gauge percent={(page / maxPage) * 100}></Gauge>
      </Fill>
    </MyProgress>
  );
}

const MyProgress = styled.div`
  margin-top: 5em;
`;
const Fill = styled.div`
  width: 100%;
  height: 7px;
  background-color: #d9dddc;
  margin-top: 1em;
  text-align: left;
`;
const Gauge = styled.div`
  background-color: #0b5ed7;
  display: inline-block;
  height: inherit;
  position: relative;
  top: -6px;
  width: ${(props) => props.percent}%;
`;

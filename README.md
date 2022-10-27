### 개발자 mbti test

📍배포 주소
http://15.164.244.238:3000/

![devMbti](https://user-images.githubusercontent.com/78632299/198205031-15f04edf-6ba3-4669-98c6-809ee218598b.gif)

🛠 **스킬 및 사용툴**

Back  `Node.js` `Express` `MongoDB` 

Front ****`React` `Redux` `Styled-Components` 

📒 **개발 내용**

- Redux를 사용하여 앱 전체 컴포넌트 상태 관리 및 결과 도출
- React Hooks(useState, useEffect, useSelector, useDispatch) 를 이용한 컴포넌트 상태 관리, 백엔드 통신 처리
- Express 서버를 만들어서 MongoDB 통신 구현
- MongoDB(Atlas)를 사용하여 설문 데이터, 참여자 Count 정보 저장 및 업데이트
- React App에서 Express 서버의 주소로 요청을 보내면, Express 서버에서 MongoDB로 부터 설문 데이터를 받아서 React에 전달 → Redux 초기 State 세팅
- MongoDB 데이터로 사용자 수 관리
- SQL 버전도 동시 구현(React 내부의 sqlFetchData() 함수 수행 시, SQL DB 사용)
    - 단, AWS EC2에 mySQL DB 서버 설치 및 Schema 세팅 필요
- AWS EC2 서비스 및 Git을 사용하여 배포

🌱 **향후 보완 개발 계획**

- 질문 12개로 늘리기
- 결과 공유하기 기능 추가

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './store/index';
import { configure } from '@testing-library/react';

/* 개발용 툴 선언*/
const reduxDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = configureStore({ reducer: rootReducer }, reduxDevTool);
// store 변수에 configurestore 메소드사용하여 store 제작,
// reducer는 rootReducer(모든 reducer가 합쳐짐)를 사용하라고 개발자 툴로 통해 전달
console.log(store.getState());
// 스토어에 저장되어있는 모든 state값이 콘솔로그로전달된다.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

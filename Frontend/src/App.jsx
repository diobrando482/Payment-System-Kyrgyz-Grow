import React from 'react';
import Header from './components/Header/index';
import Main from './components/Content/Main/index';
import  ContentTwo  from './components/Content/SecondTypeOfContent/Content';
import CodeBlock from './components/Content/CodeBlock';
import styles from "./App.css";



const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <ContentTwo/>
      <CodeBlock/>
    </div>
  );
};

export default App;

import React from 'react';
import Header from './components/Header/index';
import Main from './components/Content/Main/index';
import  ContentTwo  from './components/Content/SecondTypeOfContent/Content';
import CodeBlock from './components/Content/CodeBlock';
import Explain from './components/Content/Explain/Explain';
import Video from './components/Content/Video';
import Footer from './components/Footer';
import styles from "./App.css";



const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <ContentTwo/>
      <CodeBlock/>
      <Explain />
      <Video/>
      <Footer/>
    </div>
  );
};

export default App;

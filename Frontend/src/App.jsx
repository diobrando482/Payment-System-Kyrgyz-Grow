import React from 'react';
import Header from './components/Header/index';
import Main from './components/Content/Main/index';
import styles from './App.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
    </div>
  );
};

export default App;

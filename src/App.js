import './styles/App.css';
import { Header } from './components/Header';
import { Content } from './components/Content';
//import { useState , useEffect } from 'react';

const App = () => {

  return (
    <>
      <Header curScore='10' bestScore='20'/>
      <Content/>
    </>
  )
}

export default App;

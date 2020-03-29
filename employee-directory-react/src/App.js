import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <router>
      <wrapper>
        <route exact path="/" component={searchEmployee}/>
      </wrapper>
    </router>
  
  );
}

export default App;

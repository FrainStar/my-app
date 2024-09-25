import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function Greting(prop) {
  return <h1>{prop.name}, здаравствуйте!</h1>
}

function App() {
  return (
    <div>
      <Greting name="Ilya"/>
    </div>
  );
}

export default App;

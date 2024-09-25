import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function Greting(prop) {
  return <h1>{prop.name}, здаравствуйте!</h1>
}

function App() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h1>Счетчик: {count}</h1>
      <button onClick={() => setCount(count + 1)}></button>
    </div>
  );
}

export default App;

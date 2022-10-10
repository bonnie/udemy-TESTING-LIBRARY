import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ buttonColor, setButtonColor ] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div >
      <button 
        style={{backgroundColor: buttonColor}}
        onClick={() => setButtonColor(newButtonColor)}>
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Item from './Item';

const App = () => {
  const [email, setEmail] = useState('');

  return (
    <div>
      <h1>Destructuring</h1>
      <Item uno="1" dos="2" ocho="8" email="mari@gmail.com" />
      <Item uno="3" dos="4" ocho="8" email="mari@gmail.com" />
    </div>
  );
};

export default App;

// destructuring de arrays

const numbers = [10, 20, 30];

// const number1 = numbers[0];
// const number2 = numbers[1];

const [, secondNumber] = numbers;

console.log(secondNumber);

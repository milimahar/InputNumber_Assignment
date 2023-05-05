import { useState } from 'react';
import React from 'react';

function NumberInput() {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.valueAsNumber;   
    //above line we can write event.target.value ..number is add as string format(value is not added means 2+2=22) not 4
    setErrorMessage('');

    // Only allow positive numbers
    if (value < 0) {
      setErrorMessage('Please enter a positive number');
      return;
    }
    
    // Only allow numbers
    if (isNaN(value)) {
      setErrorMessage('Please enter a valid number');
      return;
    }

    setInputValue(value);
    
    if (value % 2 === 0) {
        // If the number is even, show the next 3 even numbers
        const nextEvens = [value + 2, value + 4, value + 6];
        setErrorMessage(`The next even numbers are: ${nextEvens.join(', ')}`);
        
      } else {
        // If the number is odd, show the next 3 odd numbers
        const nextOdds = [value + 2, value + 4, value + 6];
        setErrorMessage(`The next odd numbers are: ${nextOdds.join(', ')}`);
        
      }
    };
    
  return (
    <div>
      <h1>Enter a number:</h1>
      <input
        type="number"
        id="number-input"
        value={inputValue}
        onChange={handleInputChange}
      />
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
    </div>
  );
}

export default NumberInput;
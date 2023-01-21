import React from 'react';
import { Input } from './Input';
// Udemy's code editor is a little weird... 
// We do *not* need an 'import {useState}' line

function App() {
  const [colors, setColors] = useState([]);
  
  const addColor = (newColor) => {
    // Todo: Add 'newColor' to the --end-- of 'colors'
    // and update state
    const newColorarr =[...colors, newColor];
    setColors(newColorarr);
    
  };
  
  const renderedColors = colors.map((color, i) => {
      return <li key={i}>{color}</li>
  });
  
  return (
    <div>
      <Input onSubmit={addColor} />
      <ul>
        {renderedColors}
      </ul>
    </div>
  );
}

const useState = React.useState;
export default App;

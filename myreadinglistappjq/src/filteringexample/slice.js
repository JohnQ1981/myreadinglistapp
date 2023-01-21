import React from 'react';
import { Input } from './Input';
// Udemy's code editor is a little weird... 
// We do *not* need an 'import {useState}' line

function App() {
  const [colors, setColors] = useState([]);
  
  const addColorAtIndex = (newColor, index) => {
    // Todo: Add 'newColor' to 'colors' at the designated 'index'
    // and update state
    const slColor =[...colors.slice(0,index),
    newColor,
    ...colors.slice(index)];
    setColors(slColor);
    
  };
  
  const renderedColors = colors.map((color, i) => {
      return <li key={i}>{color}</li>
  });
  
  return (
    <div>
      <Input onSubmit={addColorAtIndex} max={colors.length} />
      <ul>
        {renderedColors}
      </ul>
    </div>
  );
}

const useState = React.useState;
export default App;

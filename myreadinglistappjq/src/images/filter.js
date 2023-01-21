import React from 'react';
import { Input } from './Input';
import { RemoveForm } from './RemoveForm';
// Udemy's code editor is a little weird... 
// We do *not* need an 'import {useState}' line

function App() {
  const [colors, setColors] = useState(['red', 'green', 'blue']);
  
  const removeColorAtIndex = (indexToRemove) => {
    // TODO: Remove the element at 'indexToRemove'
    const nColor = colors.filter((color, index)=>{
        return index !==indexToRemove;
        
    });
    // Don't forget to update state by calling 'setColors'
    setColors(nColor);
  };
  
  const addColor = (newColor) => {
    setColors([...colors, newColor])
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
      <hr />
      <RemoveForm onSubmit={removeColorAtIndex} max={colors.length}  />
    </div>
  );
}

const useState = React.useState;
export default App;

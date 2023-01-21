import React from 'react';
// Udemy's code editor is a little weird... 
// We do *not* need an 'import {useState}' line

function RemoveForm({ onSubmit, max }) {
  const [n, setN] = React.useState(0);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(n);
  };
  
  return <form onSubmit={handleSubmit}>
    <div>
        <label>Remove At Index</label>
        <input type="number" min={0} max={max > 0 ? max - 1 : 0} value={n} onChange={e => setN(parseInt(e.target.value))} />
    </div>
    <button>Remove</button>
  </form>
}

export { RemoveForm };

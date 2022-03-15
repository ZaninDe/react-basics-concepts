import React, { useState, useEffect } from 'react';
import './styles.css';

export const Button = () => {
  const [count, setcount] = useState(0);
 
  useEffect(() => {
    console.log('a sample useState and useEffect example');
  }, []);

   const sum = document.getElementById('value');

  return (
    <>

      <input id="value" type="text" />
      <input id="password" type="password" />

      <div>
        <button
          className="button"
          onClick={(() => setcount(count + 1))}
        >
          <span>{count}</span>
        </button>

        <button className="button" onClick={() => setcount(0)}>
          <span>clear</span>
        </button>
      </div>
    </>
  );
};

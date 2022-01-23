import React, { useState } from 'react';
import './Header.css'

function Header() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
        <h1> Header </h1>
    </div>
  );
}

export default Header;
import React, { useState } from 'react';

function getDate() {
  const today = new Date();
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const day = dayNames[today.getDay()];
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const date = String(today.getDate()).padStart(2, '0');
  return `${day} ${month}/${date}`;
}

function Header() {
  const [currentDate, setCurrentDate] = useState(getDate());
  return(
    <>
      <header className="t-head">
        <span> Hello. {currentDate}</span>  
      </header>
    </>
  );
}

export default Header 

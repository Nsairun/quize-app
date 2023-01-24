import React from 'react';
import './Page5.css';
import Button from '../../Button/Button';

function Page5() {
  return (
    <div className="page-question">
      <p>question ?</p>
      <div className="page-btn">
        <input type="checkbox" id="True" />
        <input type="checkbox" id="False" />
        <Button />
      </div>
    </div>
  );
}

export default Page5;

import React from 'react';
import './Page11.css';
import Button from '../../Button/Button';

function Page11() {
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

export default Page11;

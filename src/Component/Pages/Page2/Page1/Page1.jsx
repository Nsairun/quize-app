import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../Button/Button';
import './Page1.css';

function Page1() {
  return (
    <div className="page-instruction">
      <h5>Instructions</h5>
      <p>
        Welcome to our question and answering seesion for this semester. Below
        are the instructions to guide you answer the questions.
      </p>
      <ul>
        <li>Answer all the questions </li>
        <li>
          There are two checkboxes, that is, TRUE and FALSE. TRUE is for the
          right answer and FALSE for the wrong answer.
        </li>
        <li>
          There is a NEXT BUTTON below every question to permit you access the
          next pageto answer the next question.
        </li>
        <li>
          Once you access a page and go to the next page you wont be able to go
          back to the previous page.
        </li>
      </ul>
      <h2>GOOD LUCK!</h2>
      <Link to="/question/0">
        <Button />
      </Link>
    </div>
  );
}

export default Page1;

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Component/Button/Button';
import './landingPage.css';
import image from '../../images/workshop.jpg';

function Page1() {
  return (
    <div className="page-instruction">
      <h1>IQ-QUIZ</h1>
      <h2>
        Welcome to our question and answering session for this semester. Below
        are the instructions to guide you answer the questions.
      </h2>
      <div className="quizMainContainer">
        <div className="instructions">
          <div className="zerop">
            <p>
              1. There are two checkboxes, that is, TRUE and FALSE. TRUE is for
              the right answer and FALSE for the wrong answer.
            </p>
          </div>

          <div className="firstp">
            <p>
              2. There is a NEXT BUTTON below every question to permit you
              access the next pageto answer the next question.
            </p>
          </div>
          <div className="secondp">
            <p>
              3. Remember to answer all the questions any unaswered question
              will be considered wrong
            </p>
          </div>
          <div className="thirdp">
            <p>
              4. Once you access a page and go to the next page you wont be able
              to go back to the previous page.
            </p>
          </div>
        </div>
        <div>
          <img src={image} alt="background" />
        </div>
      </div>
      <div className="btmrole">
        <h2>GOOD LUCK!</h2>
        <Link to="/question/0">
          <Button />
        </Link>
      </div>
    </div>
  );
}

export default Page1;

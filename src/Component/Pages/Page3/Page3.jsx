/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionContext from '../../../Context';
import './Page3.css';

function Page3() {
  const { ansTracker, questions } = useContext(QuestionContext);
  const navigate = useNavigate();

  return (
    <div className="page-question">
      <h2>Result Page</h2>
      <p>passed: {ansTracker.passed}</p>
      <p>failed: {ansTracker.failed}</p>
      <ol>
        {questions.map((item, index) => {
          return (
            <li key={index}>
              <p dangerouslySetInnerHTML={{ __html: item.question }} />
              {item.correct_answer}
            </li>
          );
        })}
      </ol>
      <button className="retun_btn" type="button" onClick={() => navigate('/')}>
        restart
      </button>
    </div>
  );
}

export default Page3;

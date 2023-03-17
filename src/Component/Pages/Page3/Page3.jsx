/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionContext from '../../../Context';
import './Page3.css';

function Page3() {
  const { ansTracker, setansTracker, questions, setPageNumber } =
    useContext(QuestionContext);
  const navigate = useNavigate();

  const restart = () => {
    setansTracker({ passed: 0, failed: 0 });
    setPageNumber(0);
    navigate('/');
  };

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
      <button className="retun_btn" type="button" onClick={() => restart()}>
        restart
      </button>
    </div>
  );
}

export default Page3;

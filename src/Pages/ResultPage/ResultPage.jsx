/* eslint-disable react/no-danger */
import React, { useContext } from 'react';
import { FaRegEdit, FaRegGrinWink, FaRegSadCry } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import QuestionContext from '../../Context';
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
    <div className="resultDisplay">
      <h2>
        <FaRegEdit />
        Result Page
      </h2>
      <div className="answerDisplay">
        <p className="green">
          <FaRegGrinWink />
          passed: {ansTracker.passed}
        </p>
        <p className="red">
          <FaRegSadCry />
          failed: {ansTracker.failed}
        </p>
      </div>

      <ol className="result">
        {questions.map((item) => {
          return (
            <li key={item.questions}>
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

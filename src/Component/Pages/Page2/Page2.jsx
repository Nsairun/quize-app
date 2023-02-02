/* eslint-disable react/no-danger */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { QuestionConsumer } from '../../../Context';
import './Page2.css';

function Page2() {
  const [disable, setDisabled] = useState(false);

  const disableCheckedBtns = () => {
    document.querySelectorAll('.input').forEach((Input) => {
      Input.checked = false;
    });
  };

  return (
    <QuestionConsumer>
      {({ questions, changePage, pageNumber, updateAnsTracker }) => {
        return (
          questions.length > 0 && (
            <div className="page-question">
              <h2>Question</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: questions[pageNumber].question,
                }}
              />
              <div className="page-checkbox">
                <label htmlFor="True" className="true">
                  True
                </label>
                <input
                  className="input"
                  type="checkbox"
                  onChange={(e) => {
                    setDisabled(true);
                    updateAnsTracker(
                      e.target.id,
                      questions[pageNumber].correct_answer
                    );
                  }}
                  disabled={disable}
                  id="True"
                />
                <label htmlFor="False" className="false">
                  False
                </label>
                <input
                  className="input"
                  type="checkbox"
                  onChange={(e) => {
                    setDisabled(true);
                    updateAnsTracker(
                      e.target.id,
                      questions[pageNumber].correct_answer
                    );
                  }}
                  disabled={disable}
                  id="False"
                />
                <Link
                  to={pageNumber === 9 ? '/page3' : `/question/${pageNumber}`}
                  onClick={() => {
                    changePage();
                    setDisabled(false);
                    disableCheckedBtns();
                  }}
                >
                  Next
                </Link>
              </div>
            </div>
          )
        );
      }}
    </QuestionConsumer>
  );
}

export default Page2;

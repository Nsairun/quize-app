/* eslint-disable react/no-danger */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionContext from '../../../Context';
import './Page2.css';

function Page2() {
  const { questions, changePage, pageNumber, updateAnsTracker } =
    useContext(QuestionContext);

  const navigate = useNavigate();

  const switchPage = () => {
    navigate(pageNumber === 9 ? '/page3' : `/question/${pageNumber + 1}`);
  };

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
          <button
            className="true"
            type="button"
            id="True"
            onClick={(e) => {
              updateAnsTracker(
                e.target.id,
                questions[pageNumber].correct_answer
              );
              changePage();
              switchPage();
            }}
          >
            True
          </button>

          <button
            className="false"
            id="False"
            type="button"
            onClick={(e) => {
              updateAnsTracker(
                e.target.id,
                questions[pageNumber].correct_answer
              );
              changePage();
              switchPage();
            }}
          >
            false
          </button>
        </div>
      </div>
    )
  );
}

export default Page2;

/* eslint-disable react/no-danger */
import { useContext } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import QuestionContext from '../../Context';
import './hero.css';
import image2 from '../../images/p6.jpg';

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
        <div className="decoration">
          <img src={image2} alt="pagepic" />
        </div>
        <h2>Question</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: questions[pageNumber].question,
          }}
        />
        <div className="options">
          <div className="option1">
            <p>True</p>
          </div>
          <div>
            <p>False</p>
          </div>
          <AiFillEdit />
        </div>
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

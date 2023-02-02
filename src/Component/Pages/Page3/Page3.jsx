/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';
import { QuestionConsumer } from '../../../Context';
import './Page3.css';

function Page3() {
  return (
    <QuestionConsumer>
      {({ ansTracker, questions }) => {
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
          </div>
        );
      }}
    </QuestionConsumer>
  );
}

export default Page3;

/* eslint-disable react/jsx-no-constructed-context-values */
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Page1 from './Component/Pages/Page2/Page1/Page1';
import Page2 from './Component/Pages/Page2/Page2';
import Page3 from './Component/Pages/Page3/Page3';
import QuestionContext from './Context';

function App() {
  const [questions, setQuestions] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [ansTracker, setansTracker] = useState({ passed: 0, failed: 0 });

  const fetchData = async () => {
    const response = await fetch(
      'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    fetchData().then((res) => setQuestions(res.results));
  }, []);

  const changePage = () => {
    setPageNumber((prev) => prev + 1);
  };

  const updateAnsTracker = (ans, correctAns) => {
    if (ans === correctAns) {
      setansTracker({
        passed: ansTracker.passed + 1,
        failed: ansTracker.failed,
      });
    } else {
      setansTracker({
        passed: ansTracker.passed,
        failed: ansTracker.failed + 1,
      });
    }
  };

  return (
    <div className="app-pages">
      <QuestionContext.Provider
        value={{
          questions,
          changePage,
          pageNumber,
          updateAnsTracker,
          ansTracker,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route index element={<Page1 />} />

            <Route path="/question/:id" element={<Page2 />} />

            <Route path="/page3" element={<Page3 />} />
          </Routes>
        </BrowserRouter>
      </QuestionContext.Provider>
    </div>
  );
}

export default App;

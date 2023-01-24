import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Page1 from './Component/Pages/Page1/Page1';
import Page2 from './Component/Pages/Page2/Page2';
import Page3 from './Component/Pages/Page3/Page3';
import Page4 from './Component/Pages/Page4/Page4';
import Page5 from './Component/Pages/Page5/Page5';
import Page6 from './Component/Pages/Page6/Page6';
import Page7 from './Component/Pages/Page7/Page7';
import Page8 from './Component/Pages/Page8/Page8';
import Page9 from './Component/Pages/Page9/Page9';
import Page10 from './Component/Pages/Page10/Page10';
import Page11 from './Component/Pages/Page11/Page11';

function App() {
  return (
    <div className="app-pages">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
          <Route path="/page7" element={<Page7 />} />
          <Route path="/page8" element={<Page8 />} />
          <Route path="/page9" element={<Page9 />} />
          <Route path="/page10" element={<Page10 />} />
          <Route path="/page11" element={<Page11 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

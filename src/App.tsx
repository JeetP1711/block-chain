import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Topics from './pages/Topics';
import TopicDetail from './pages/TopicDetail';
import Visualize from './pages/Visualize';
import Compare from './pages/Compare';
import QuizMode from './pages/QuizMode';
import Flashcards from './pages/Flashcards';
import ExamMode from './pages/ExamMode';
import Revision from './pages/Revision';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="topics" element={<Topics />} />
          <Route path="topics/:id" element={<TopicDetail />} />
          <Route path="visualize" element={<Visualize />} />
          <Route path="compare" element={<Compare />} />
          <Route path="quiz" element={<QuizMode />} />
          <Route path="flashcards" element={<Flashcards />} />
          <Route path="exam" element={<ExamMode />} />
          <Route path="revision" element={<Revision />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

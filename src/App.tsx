import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ResumePage from './pages/ResumePage/ResumePage';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />

          <Route path=":userName" element={<ResumePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

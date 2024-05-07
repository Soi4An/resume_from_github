import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ResumePage from './pages/ResumePage/ResumePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />

          <Route path=":userId" element={<ResumePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

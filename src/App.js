import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/index';

// https://www.youtube.com/watch?v=bmpI252DmiI
// at 22 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;

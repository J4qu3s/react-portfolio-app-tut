import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/index';
import Home from './components/Home';

// https://www.youtube.com/watch?v=bmpI252DmiI
// at 43 - doing svg logo 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />}/>  
        </Route>
      </Routes>
    </>
  );
}

export default App;

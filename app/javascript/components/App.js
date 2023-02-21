import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greetings from './Greetings';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Greetings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

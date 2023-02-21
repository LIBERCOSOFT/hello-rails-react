import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greetings from './Greetings';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Greetings />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css';
import { Home } from './components/Home';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { About } from './components/About';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

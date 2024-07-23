import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/index.jsx'
import Graphic from './Pages/Graphic/index.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/graphic' element={<Graphic />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

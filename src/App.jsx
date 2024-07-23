import { Outlet } from 'react-router-dom'

import Header from './Components/Header'
import NavRoutes from './Components/NavRoutes'

import "./App.css"

export default function App() {
  return (
    <div className='app'>
      <Header />
      <div className='navRoutes'>
        <NavRoutes />
        <Outlet />
      </div>
    </div>
  )
}

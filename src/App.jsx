import { useState, useEffect } from 'react'

import { Outlet } from 'react-router-dom'

import SplashScreen from './Pages/SplashScreen'
import Header from './Components/Header'
import NavRoutes from './Components/NavRoutes'

import "./App.css"

export default function App() {

  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    // Define o temporizador para ocultar a tela de splash após 3 segundos
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000);

    // Limpa o temporizador quando o componente é desmontado
    return () => clearTimeout(timer);
  }, []);

  if (isSplashVisible) {
    return (
      <SplashScreen />
    );
  }


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

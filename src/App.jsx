import { useState, useEffect } from 'react'

import SplashScreen from './Pages/SplashScreen'
import Header from './Components/Header'
import Home from './Pages/Home'

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
      <Home />
    </div>
  )
}

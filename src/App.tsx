import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SidNav from "./components/SidNav"
import About from "./pages/About"
import Footer from "./components/Footer"
import Certificate from "./pages/Certificate"
import Contact from "./pages/Contact"
import ProjetosPage from "./pages/Projetos"
import { PrimeIcons } from 'primereact/api';

function App() {
  const [width, setWidth] = React.useState(screen.width)
  const [activeMenu, setActiveMenu] = React.useState<boolean>(false)

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(screen.width)
    }

    window.addEventListener('resize', handleResize);

    // Limpar o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (
    
    <BrowserRouter>
      <div className="container" >
        {
          width <= 1024 && activeMenu === false ?
          <i 
            className="pi pi-bars"
            onClick={() => setActiveMenu(!activeMenu)}
            style={{fontSize: '40px',
              position:'fixed'
            }}
          />
          : 
          <SidNav onNavClick={(active) => setActiveMenu(active)}/>
        }
        <main 
          
          className={`${activeMenu ? 'disabled' : ''}`}
        >
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjetosPage />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer/>
        </main>
        {activeMenu && <div className="overlay" onClick={() => setActiveMenu(false)}></div>}
      </div>
    </BrowserRouter>
  )
}

export default App

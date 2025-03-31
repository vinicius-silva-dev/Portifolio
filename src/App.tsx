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
import DetailsProject from "./pages/DetailsProject"

function App() {
  const [width, setWidth] = React.useState(screen.width)
  const [activeMenu, setActiveMenu] = React.useState<boolean>(false)
  const [activeDark, setActiveDark] = React.useState<boolean>(false)

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
      <div className={`container ${activeDark ? 'dark-container' : ''} `} >
        {
          width <= 1024 && activeMenu === false ?
          <i 
            className="pi pi-bars"
            onClick={() => setActiveMenu(!activeMenu)}
            style={{fontSize: '40px',
              position:'fixed',
              color: activeDark ? '#fff' : ''
            }}
          />
          : 
          <SidNav darkMode={(activeDark) => setActiveDark(activeDark)}/>
        }
        <main 
          
          className={`${activeMenu ? 'disabled' : ''}`}
        >
          <Routes>
            <Route path="/" element={<Home activeDark={activeDark}/>} />
            <Route path="/about" element={<About activeDark={activeDark}/>} />
            <Route path="/projects" element={<ProjetosPage activeDark={activeDark}/>} />
            <Route path="/projects/:id" element={<DetailsProject activeDark={activeDark}/>} />
            <Route path="/certificate" element={<Certificate activeDark={activeDark}/>} />
            <Route path="/contact" element={<Contact activeDark={activeDark}/>} />
          </Routes>
          <Footer activeDark={activeDark}/>
        </main>
        {activeMenu && <div className="overlay" onClick={() => setActiveMenu(false)}></div>}
      </div>
    </BrowserRouter>
  )
}

export default App

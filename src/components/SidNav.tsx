import React from 'react'
import PerfilImg from '../assets/IMG_20211212_185802 1.png'

import Whatsapp from '../assets/whatsapp.png'
import Linkedin from '../assets/linkedin.png'
import Github from '../assets/github.png'

import WhatsappDark from '../assets/footer-sidnav/whatsapp-dark.png'
import LinkedinDark from '../assets/footer-sidnav/linkedIn-dark.png'
import GitihubDark from '../assets/footer-sidnav/github-dark.png'

import Home from '../assets/home.png'
import About from '../assets/about.png'
import Projetos from '../assets/certificate.png'
import Certificates from '../assets/certificado2.png'
import Contact from '../assets/contact.png'

import HomeDark from '../assets/dark/home-dark.png'
import AboutDark from '../assets/dark/about-dark.png'
import ProjetosDark from '../assets/dark/projetos-dark.png'
import CertificadosDark from '../assets/dark/certificado-dark.png'
import ContatoDark from '../assets/dark/contato-dark.png'

import Dark from '../assets/dark.png'
import DarkDark from '../assets/dark-dark.png'
import { NavLink } from 'react-router-dom'

type SidNavProps = React.ComponentProps<'input'> & {
  activeSidNav?: React.Dispatch<React.SetStateAction<boolean>>
  darkMode: (activeDark: boolean) => void
}

function SidNav(
  {darkMode}: SidNavProps,
) {
  const [active, setActive] = React.useState<string | null>(null)
  const [activeDark, setActiveDark] = React.useState(false)

  const menu = [
    {
      img: activeDark ? HomeDark : Home,
      name: "Home",
      path: "/"
    },
    {
      img: activeDark ? AboutDark : About,
      name: "About",
      path: "/about"
    },
    {
      img: activeDark ? ProjetosDark : Projetos,
      name: "Projetos",
      path: "/projects"
    },
    {
      img: activeDark ? CertificadosDark : Certificates,
      name: "Certificate",
      path: "/certificate"
    },
    {
      img: activeDark ? ContatoDark : Contact,
      name: "Contact",
      path: "/contact"
    },
   
  ]

  const phoneNumber = "5569993062435"
  const linkedin = "https://www.linkedin.com/in/vinicius-silva-souza-08422b1a2/"
  const github = "https://github.com/viniciusvss120"

  return (
    <div className={`sidnavcontainer ${activeDark  ? 'dark-sidnavcontainer' : ''}`} style={{background: activeDark ? "#151414" : ""}}>
      <div className={`perfil ${activeDark === true ? 'dark-perfil' : ''}`}>
        <img className='perfilImg' src={PerfilImg} alt="perfil" />
        <div className="nomePerfil">
          <p 
            style={{fontWeight: 600, fontSize: '1.3rem'}}
          >
            Vinicius Silva Souza <br />
            <span 
              style={{fontSize: '14px', color: '#7D7D7D'}}
            >
              Desenvolvedor Full Stack
            </span>
          </p>
          <img 
            className='dark-img'
            style={{ maxWidth: '20px', cursor: 'pointer'}} 
            src={activeDark ? DarkDark : Dark} 
            alt="dark" 
            onClick={() => {
              setActiveDark(!activeDark)
              darkMode(!activeDark)
            }}
          />
        </div>
      </div>

      <nav className="sidnav">
        <ul>
          {menu.map((item) => (
            <NavLink to={item.path}>
              <li 
                key={item.name}
                className={`navigation ${activeDark ? 'navigation-dark' : ''}  ${
                  active === item.name ? `navbackground ${activeDark ? 'navbackground-dark' : ''} `: `navigationhover 
                  ${activeDark ? 'navigationhover-dark' : ''} `
                  }`
                }
                style={{border: activeDark ? "1px solid #272727": ''}}
                onClick={() => {
                  setActive(item.name)
                }}
              >
                <img className='img-sidnav' src={item.img} alt="" />
                <span>{item.name}</span>
              </li>
            </NavLink>
          ))}
          
        </ul>
      </nav>

      <div className="footer-contato">
        <ul style={{border: activeDark ? "1px solid #272727": ''}}>
          <li>
            <a href={`https://wa.me/${phoneNumber}`} target='_blank'>
              
              <img src={activeDark ? WhatsappDark : Whatsapp} alt="whatsapp" />
            </a>
          </li>
          <li>
            <a href={linkedin} target='_blank'>
              <img src={activeDark ? LinkedinDark : Linkedin} alt="linkedin" />
            </a>
          </li>
          <li>
            <a href={github} target='_blank'>
              <img src={activeDark ? GitihubDark : Github} alt="github" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SidNav

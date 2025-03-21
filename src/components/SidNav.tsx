import React from 'react'
import PerfilImg from '../assets/IMG_20211212_185802 1.png'
import Whatsapp from '../assets/whatsapp.png'
import Linkedin from '../assets/linkedin.png'
import Github from '../assets/github.png'
import Home from '../assets/home.png'
import About from '../assets/about.png'
import Projetos from '../assets/certificate.png'
import Certificates from '../assets/certificado2.png'
import Contact from '../assets/contact.png'
import Dark from '../assets/dark.png'
import { NavLink } from 'react-router-dom'
import ProjetosPage from '../pages/Projetos'

type SidNavProps = React.ComponentProps<'input'> & {
  activeSidNav?: React.Dispatch<React.SetStateAction<boolean>>
  onNavClick: (active: boolean) => void
}

function SidNav(
  {onNavClick}: SidNavProps,
) {
  const [active, setActive] = React.useState<string | null>(null)

  const menu = [
    {
      img: Home,
      name: "Home",
      path: "/"
    },
    {
      img: About,
      name: "About",
      path: "/about"
    },
    {
      img: Projetos,
      name: "Projetos",
      path: "/projects"
    },
    {
      img: Certificates,
      name: "Certificate",
      path: "/certificate"
    },
    {
      img: Contact,
      name: "Contact",
      path: "/contact"
    },
   
  ]

  const phoneNumber = "5569993062435"
  const linkedin = "https://www.linkedin.com/in/vinicius-silva-souza-08422b1a2/"
  const github = "https://github.com/viniciusvss120"

  return (
    <div className='sidnavcontainer'>
      <div className="perfil">
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
          <img style={{ maxWidth: '20px', cursor: 'pointer'}} src={Dark} alt="" />
        </div>
      </div>

      <nav className="sidnav">
        <ul>
          {menu.map((item) => (
            <NavLink to={item.path}>
              <li 
                key={item.name}
                className={`navigation ${
                  active === item.name ? "navbackground": "navigationhover"
                  }`
                }
                onClick={() => {
                  setActive(item.name)
                  // onNavClick(false)
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
        <ul>
          <li>
            <a href={`https://wa.me/${phoneNumber}`} target='_blank'>
              <img src={Whatsapp} alt="whatsapp" />
            </a>
          </li>
          <li>
            <a href={linkedin} target='_blank'>
              <img src={Linkedin} alt="linkedin" />
            </a>
          </li>
          <li>
            <a href={github} target='_blank'>
              <img src={Github} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SidNav

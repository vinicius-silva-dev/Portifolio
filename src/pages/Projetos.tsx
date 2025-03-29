import React from 'react'
// import { Dialog } from 'primereact/dialog';
import Projeto from '../components/Projeto'
import {projeto} from '../components/Projetos'
import fintech from '../assets/projects/fintech.png'
import delivery from '../assets/projects/delivery.png'
import { NavLink } from 'react-router-dom'

type ProjectsProps = {
  activeDark: boolean
}

const projetos = [
  ...projeto,
  {
    id: 'Fintech',
    img: `${fintech}`,
    name: 'Fintech (FRONT-END)'
  },
  {
    id: 'Delivery-React-Native',
    img: `${delivery}`,
    name: 'Delivery (FRONT-END)'
  },
]
function ProjetosPage({activeDark}: ProjectsProps) {
  return (
    <div className='projetosPage-container' >
      <header className='projetosPage-header'>
        <h1 style={{color: activeDark ? "#fff": ""}}>Projetos</h1>
        <div className="divider-about"></div>
      </header>

      <section className='projetosPage'>
        <ul>
          {projetos.map((item) => (
           

              <li 
                key={item.id}
              >
                <NavLink to={`/projects/${item.id}`}>
                  <img src={item.img} alt="" />
                  <p
                   style={{background: '#D5D5D5', width: '100%', borderRadius: '10px', opacity: '0.8'}}
                  >
                    <span>{item.name}</span>
                  </p>
                </NavLink>
              </li>
          ))}
        </ul>
        {/* <Dialog 
          header='Header'
          visible={visible}
          style={{ width: '45vw'}} 
          onHide={() => {if (!visible) return; setVisible(false); }}
        >
          <div className="dialog">
            <img src={img} alt="" />
          </div>
        </Dialog> */}
      </section>
    </div>
  )
}

export default ProjetosPage

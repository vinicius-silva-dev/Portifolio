import React from 'react'
// import { Dialog } from 'primereact/dialog';
// import Projeto from '../components/Projeto'
import {projeto} from '../components/Projetos'
import toDo from '../assets/projects/to-do2.png'
import FestFeet from '../assets/projects/fest-feet.png'
import FindAFriend from '../assets/projects/find-a-friend.png'
import Daily from '../assets/projects/daily.png'
import vsSysten from '../assets/projects/vs-systen2.png'
import fintech from '../assets/projects/fintech.png'
import McDonalds from '../assets/projects/mcdonald.png'
import delivery from '../assets/projects/delivery.png'
import { NavLink } from 'react-router-dom'

type ProjectsProps = {
  activeDark: boolean
}

const projetos = [
  {
    id: 'vs-systen',
    img: `${vsSysten}`,
    name: 'Vs-Systen'
  },
  {
    id: 'to-do-list-backend',
    img: `${toDo}`,
    name: 'To Do List'
  },
  {
    id: 'daily-diet',
    img: `${Daily}`,
    name: 'Daily Diet'
  },
  {
    id: 'Nest-Fast-Feet',
    img: `${FestFeet}`,
    name: 'FestFeet'
  },
  {
    id: 'find-a-friend',
    img: `${FindAFriend}`,
    name: 'Find a Friend'
  },
  {
    id: 'Fintech',
    img: `${fintech}`,
    name: 'Fintech (FRONT-END)'
  },
  {
    id: 'mcdonald',
    img: `${McDonalds}`,
    name: 'McDonalds (FRONT-END)'
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

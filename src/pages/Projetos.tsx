import React from 'react'
// import { Dialog } from 'primereact/dialog';
import Projeto from '../components/Projeto'
import {projeto} from '../components/Projetos'
import fintech from '../assets/projects/fintech.png'

const projetos = [
  ...projeto,
  {
    id: 'Fintech',
    img: `${fintech}`,
    name: 'Fintech (FRONT-END)'
  },
]
function ProjetosPage() {
  return (
    <div className='projetosPage-container' >
      <header className='projetosPage-header'>
        <h1>Projetos</h1>
        <div className="divider-about"></div>
      </header>

      <section className='projetosPage'>
        <ul>
          {projetos.map((item) => (
            <li 
              key={item.id}
            >
              <img src={item.img} alt="" />
              <span>{item.name}</span>
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

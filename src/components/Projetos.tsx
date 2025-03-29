import React from 'react'
import { IoIosArrowForward,IoIosArrowBack  } from "react-icons/io";
import Projeto from './Projeto';
import ToDoList from '../assets/projects/to-do-list.png'
import VsSysten from '../assets/projects/vs-systen.png'
import Chamados from '../assets/projects/chamados-gima.png'
import ButtonComponent from './ButtonComponent';
import McDonalds from '../assets/projects/mcdonald.png'
// import Delivery from '../assets/projects/delivery.png'
// import Fintech from '../assets/projects/fintech.png'

type ProjetosProps = {
  activeDark: boolean
}


export const projeto = [
  {
    id: 'to-do-list-backend',
    img: `${ToDoList}`,
    name: 'To-Do-List (BACK-END)'
  },
  {
    id: 'vs-systen',
    img: `${VsSysten}`,
    name: 'VS-SYSTEN (FRONT-END)'
  },
  {
    id: 'Chamados-Gima',
    img: `${Chamados}`,
    name: 'Chamados-Gima (FRONT-END)'
  },
  {
    id: 'mcdonald',
    img: `${McDonalds}`,
    name: 'McDonalds (FRONT-END)'
  },
]

function Projetos({activeDark}:ProjetosProps) {

  function scrollRight() {
    const carrocel = document.getElementById('projetos')
    carrocel?.scrollBy({
      left: 250, // Move 200px para a direita
      behavior: "smooth",
    })
  }

  function scrollLeft() {
    const carrocel = document.getElementById('projetos')
    carrocel?.scrollBy({
      left: -250, // Move 200px para a direita
      behavior: "smooth",
    })
  }
  return (
    <div>
      <div className="title-projects">
        <h2 className={`${activeDark ? 'title-projects-dark': ''}`}>Projetos</h2>
        <ButtonComponent>
          <a href="/projects">Ver Projetos</a>
        </ButtonComponent>

      </div>
      <div className='projetos-container' style={{border: activeDark ? "1px solid #272727": ''}}>
        
        <ul className="projetos" id='projetos'>
          {projeto.map((item) => (
            <li>
              <Projeto
                id={item.id}
                img={item.img}
                name={item.name}
                activeDark={activeDark}
              />
            </li>
          ))}
        </ul>
        <div className="preview-next">
          <IoIosArrowBack className='arrows' style={{color: activeDark ? "#fff" : "#000"}} onClick={scrollLeft}/>
          <IoIosArrowForward className='arrows' style={{color: activeDark ? "#fff" : "#000"}} onClick={scrollRight}/>
        </div>

      </div>
    </div>
  )
}

export default Projetos

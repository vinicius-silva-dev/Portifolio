import React from 'react'
import { IoIosArrowForward,IoIosArrowBack  } from "react-icons/io";
import Projeto from './Projeto';
import ButtonComponent from './ButtonComponent';

import ToDoList from '../assets/projects/to-do-list.png'
import VsSysten from '../assets/projects/vs-systen.png'
import Chamados from '../assets/projects/chamados-gima.png'
import TypeScript from '../assets/projects/tecnologias/typescript.png'
import Nodejs from '../assets/projects/tecnologias/nodejs.png'
import Nestjs from '../assets/projects/tecnologias/nestjs.png'
import Vue from '../assets/projects/tecnologias/vue.png'
import Html from '../assets/projects/tecnologias/html.png'
import Css from '../assets/projects/tecnologias/css.png'

import { NavLink } from 'react-router-dom';


type ProjetosProps = {
  activeDark: boolean
}


export const projeto = [
  {
    id: 'to-do-list-backend',
    img: `${ToDoList}`,
    name: 'To-Do-List',
    category: 'Back-end',
    description: 'API de gerenciamento e o organização de tarefas',
    tecnologias: [`${TypeScript}`, `${Nodejs}`, `${Nestjs}`]
  },
  {
    id: 'vs-systen',
    img: `${VsSysten}`,
    name: 'VS-SYSTEN',
    category: 'Front-end',
    description: 'Sistema de gestão empresarial,com diversas funcionalidades e módulos.',
    tecnologias: [`${Vue}`, `${Html}`, `${Css}`]
  },
  {
    id: 'Chamados-Gima',
    img: `${Chamados}`,
    name: 'Chamados-Gima',
    category: 'Back-end',
    description: 'Sistema de gerenciamento de chamados e tarefas.',
    tecnologias: [`${Vue}`, `${Html}`, `${Css}`]
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
          <NavLink to="/projects">Ver Projetos</NavLink>
        </ButtonComponent>

      </div>
      <div className='projetos-container' style={{border: activeDark ? "1px solid #272727": ''}}>
        
        <ul className="projetos" id='projetos'>
          {projeto.map((item) => (
            <li>
              <NavLink to={`/projects/${item.id}`}>

                <Projeto
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  category={item.category}
                  description={item.description}
                  tecnologias={item.tecnologias}
                  activeDark={activeDark}
                />
              </NavLink>
            </li>
          ))}
        </ul>
        {
          projeto.length > 3 ? (
            <div className="preview-next">
              <IoIosArrowBack className='arrows' style={{color: activeDark ? "#fff" : "#000"}} onClick={scrollLeft}/>
               <IoIosArrowForward className='arrows' style={{color: activeDark ? "#fff" : "#000"}} onClick={scrollRight}/>
            </div>
          ): ''
        }
   

      </div>
    </div>
  )
}

export default Projetos

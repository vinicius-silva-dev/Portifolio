import React from 'react'
import { GoArrowRight } from "react-icons/go";

import GitHub from '../assets/github_original_wordmark_logo_icon_146506.png'
import { NavLink } from 'react-router-dom';

type ProjetoProps = {
  id: string,
  img: string,
  name: string,
  category?: string,
  description?: string,
  tecnologias?: string[]
  activeDark: boolean
}

function Projeto({
  id,
  img,
  name,
  category,
  description,
  tecnologias,
  activeDark
}: ProjetoProps) {
  return (
    <div className='projeto-container' style={{border: activeDark ? "1px solid #272727": ''}}>
      <div className="imgProjeto">
        <img src={img} alt="" />
      </div>
      <div className='title-projeto' style={{color: activeDark ? " #fff": ''}}>
        <p>{name}</p>
        <span>{category}</span>
      </div>
      <div className="description-projeto" style={{color: activeDark ? " #fff": ''}}>
        <p>{description}</p>
      </div>
      <div className='tecnologias-projeto'>
        <ul className="tecnologias">
          {tecnologias?.map((item) => (
            <li>
              <img src={item} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Projeto

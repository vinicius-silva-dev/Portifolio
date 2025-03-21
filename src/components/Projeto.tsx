import React from 'react'
import { GoArrowRight } from "react-icons/go";

import GitHub from '../assets/github_original_wordmark_logo_icon_146506.png'

type ProjetoProps = {
  id: string,
  img: string,
  name: string,
}

function Projeto({id, img, name}: ProjetoProps) {
  return (
    <div className='projeto-container'>
      <div className="img">
        <img src={img} alt="" />
      </div>
      <span className='name-projeto'>{name}</span>
      <div className="btn-projeto-container">
        <button className='btn-projeto'>
          {/* <span>Git Hub</span> */}
          <a href={`https://github.com/vinicius-silva-dev/${id}`} target='_blank'>
            <img src={GitHub} alt="" />
          </a>
        </button>
        <button className='btn-projeto'>
          <a href={`/projetos/${id}`} >
            <GoArrowRight style={{fontSize: '40px', color: '#978F8F'}}/>
          </a>
        </button>
      </div>
    </div>
  )
}

export default Projeto

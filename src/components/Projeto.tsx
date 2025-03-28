import React from 'react'
import { GoArrowRight } from "react-icons/go";

import GitHub from '../assets/github_original_wordmark_logo_icon_146506.png'
import { NavLink } from 'react-router-dom';

type ProjetoProps = {
  id: string,
  img: string,
  name: string,
  activeDark: boolean
}

function Projeto({id, img, name, activeDark}: ProjetoProps) {
  return (
    <div className='projeto-container' style={{border: activeDark ? "1px solid #272727": ''}}>
      <div className="img">
        <img src={img} alt="" />
      </div>
      <span className='name-projeto' style={{color: activeDark ? "#fff":"#000"}}>{name}</span>
      <div className="btn-projeto-container">
        <button className='btn-projeto'>
          {/* <span>Git Hub</span> */}
          <a href={`https://github.com/vinicius-silva-dev/${id}`} target='_blank'>
            <img src={GitHub} alt="" />
          </a>
        </button>
        <button className='btn-projeto'>
          <NavLink to={`/projects/${id}`} >
            <GoArrowRight style={{fontSize: '40px', color: '#978F8F'}}/>
          </NavLink>
        </button>
      </div>
    </div>
  )
}

export default Projeto

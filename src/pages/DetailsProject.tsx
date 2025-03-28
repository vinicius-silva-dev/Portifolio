import React from 'react'
import {projects} from '../repository/projetcs'
import { NavLink, useParams } from 'react-router-dom'


const styleButton = {
  width: '190px',
  height: '40px',
  alignSelf: 'center',
  // marginTop: '80px',
  borderRadius: '10px'
}

type DetailsProjectProps = {
  activeDark: boolean
}

interface ProjectType {
  id: string
  nameProject: string
  ano: number
  categoria: string
  description: string
  tecnologias: string[]
  photos: string[]
}

function DetailsProject({ activeDark}: DetailsProjectProps) {
  const [project, setProject] = React.useState<ProjectType | null>(null)
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    const findProject = projects.find((item) => item.id === id)

    if(findProject) {
      setProject(findProject)
    }
  },[])

  return (
    <div className='datailsProject-container'>
      <button
        style={styleButton}
      >
        <a href={'/projects'}>Todos os projetos</a>
        
      </button>

      <header 
        className='detailsProject-header' 
      >
        <h2 
          style={{color: activeDark ? '#fff': ''}}
        >
          {project?.nameProject}
        </h2>
        <div className="cardProject">
          <div className="anoProject">
            <h5>Ano</h5>
            <span>{project?.ano}</span>
          </div>
          <div className="categoria">
            <h5>Categoria</h5>
            <span>{project?.categoria}</span>
          </div>
        </div>
      </header>
      <div className="detailsProject-main">
        <div className="photosProject">
          {project?.photos.map((img) => (

            <img src={img} alt="" />
          ))}
        </div>
        <div 
          className="description"
          style={{color: activeDark ? '#fff': ''}}
        >
          <p>{project?.description}</p>
          <ul style={{marginTop: '30px'}}>
            {project?.tecnologias.map((item) => (
              <li style={{listStyle: 'initial', fontWeight: 500}}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DetailsProject

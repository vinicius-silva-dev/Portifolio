import React from 'react'
import ButtonComponent from '../components/ButtonComponent'
import Projetos from '../components/Projetos'
import PerfilImg from '../assets/IMG_20211212_185802 1.png'

import JavaScript from '../assets/stacks/js.png'
import Node from '../assets/stacks/node.png'
import Typescript from '../assets/stacks/ts.png'
import Nest from '../assets/stacks/nest.png'
import Sql from '../assets/stacks/sql.png'
import Vue from '../assets/stacks/vue.png'
import ReactImg from '../assets/stacks/react.png'
import Next from '../assets/stacks/next.png'
import HTML from '../assets/stacks/html.png'
import Css from '../assets/stacks/css.png'
import Mongo from '../assets/stacks/mongo.png'
// import ToDoList from '../assets/to-do-list.png'
// import Footer from '../components/Footer';
// import ProjetosComponets from '../components/ProjetosComponent';

type HomeProps = {
  activeDark: boolean
}

function Home({activeDark}: HomeProps) {
  const [showImgPerfil, setShowImgPerfil] = React.useState(false)

  const currentDisplay = screen.width

  React.useEffect(() => {
    if(currentDisplay <= 768) {
      setShowImgPerfil(true)
    }
  },[currentDisplay])
  return (
    <div className='home-container'>
      <header className='header'>
        {showImgPerfil && (
          <img src={PerfilImg} alt="" style={{justifySelf: 'center', marginBottom: '30px'}} />
        )}
        <p className={`apresentacao ${activeDark ? 'apresentacao-dark' : ''}`}>
          Olá! Seja bem-vindo. <br />
          Eu sou Vinicius Silva, <span style={{color: !activeDark ? '#000' : '#fff'}}>Desenvolvedor <br /> Full Stack</span> e apaixonado por tecnologia.
        </p>
        <span className='header-rodape' style={{fontSize: '14px', color: !activeDark ? '#000' : '#fff' }}>
          Estudo programação desde 2021 e estou sempre em busca de novos desafios e aprendizado.
        </span>

        <div className='home-btn'>
          <ButtonComponent
          >
            <a href="./contact">Entre em contato</a>
          </ButtonComponent>
          <ButtonComponent>
            <a href="./about">Sobre mim</a>
          </ButtonComponent>
          <a 
            href='/novo_curriculo.pdf'
            download="novo_curriculo.pdf"
            className='btn'
            style={{background: '#167D05', color: '#fff'}}
          >
            Baixar CV
          </a>
  
        </div>

        <div className="divider"></div>

      </header>
      
      <section>
        <Projetos
          activeDark={activeDark}
        />
      </section>

      <section className="staks-container">
        <h2 style={{color: !activeDark ? '#000' : '#fff' }}>Minhas Staks</h2>
        <ul className='staks' style={{color: !activeDark ? '#000' : '#fff' }}>
          <li>
            <img src={JavaScript} alt="js" />
            <span>Javascript</span>
          </li>
          <li>
            <img src={Node} alt="node" />
            <span>Node.js</span>
          </li>
          <li>
            <img src={Typescript} alt="ts" />
            <span>Typescript</span>
          </li>
          <li>
            <img src={Nest} alt="nest" />
            <span>Nest.js</span>
          </li>
          <li>
            <img src={Sql} alt="sql" />
            <span>SQL</span>
          </li>
          <li>
            <img src={Mongo} alt="mongo" />
            <span>mongo.js</span>
          </li>
          <li>
            <img src={Vue} alt="vue" />
            <span>Vue.js</span>
          </li>
          <li>
            <img src={ReactImg} alt="React" />
            <span>React.js</span>
          </li>
          <li>
            <img src={Next} alt="Next" />
            <span>Next.js</span>
          </li>
          <li>
            <img src={HTML} alt="html" />
            <span>HTML</span>
          </li>
          <li>
            <img src={Css} alt="css" />
            <span>CSS</span>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Home

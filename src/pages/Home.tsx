import React from 'react'
import ButtonComponent from '../components/ButtonComponent'
import Projetos from '../components/Projetos'

import JavaScript from '../assets/js.png'
import Node from '../assets/node.png'
import Typescript from '../assets/ts.png'
import Nest from '../assets/nest.png'
import Sql from '../assets/sql.png'
import Vue from '../assets/vue.png'
import ReactImg from '../assets/react.png'
import Next from '../assets/next.png'
import HTML from '../assets/html.png'
import Css from '../assets/css.png'
import Mongo from '../assets/mongo.png'
// import ToDoList from '../assets/to-do-list.png'
// import Footer from '../components/Footer';
// import ProjetosComponets from '../components/ProjetosComponent';

function Home() {
  return (
    <div className='home-container'>
      <header className='header'>
        <p className='apresentacao'>
          Olá! Seja bem-vindo. <br />
          Eu sou Vinicius Silva, <span style={{color: '#000'}}>Desenvolvedor <br /> Full Stack</span> e apaixonado por tecnologia.
        </p>
        <span className='header-rodape' style={{fontSize: '14px'}}>
          Estudo programação desde 2021 e estou sempre em busca de novos desafios e aprendizado.
        </span>

        <div className='home-btn'>
          <ButtonComponent
          >
            <a href="./contato">Entre em contato</a>
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
        <Projetos/>
      </section>

      <section className="staks-container">
        <h2>Minhas Staks</h2>
        <ul className='staks'>
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

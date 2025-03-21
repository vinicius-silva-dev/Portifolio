import React from 'react'
import ButtonComponent from '../components/ButtonComponent'
import ImgBio from '../assets/biografia.png'

function About() {
  return (
    <div className='about-container'>
      <header className='about-header'>
        <h1>Sobre mim</h1>
        <div className="about-btn">
          <ButtonComponent
            style={{height: '40px'}}
          >
            <a href="/contact">Entre em contato</a>
          </ButtonComponent>
          <ButtonComponent
            style={{height: '40px'}}
          >
            <a href="/certificate">Ver certificados</a>
          </ButtonComponent>
        </div>
        <div className="divider-about"></div>
        <div className="card-about">
          <div className="residencia">
            <h4>Residencia</h4>
            <span>Jaru, Rondônia, Brasil</span>
          </div>
          <div className="tempo-experiencia">
            <h4>2</h4>
            <span>Anos de experiência</span>
          </div>
        </div>
      </header>

      <section className='sobre'>
        <div className="biografia">
          <h2>Olá, Eu sou Vinicius</h2>
          <p>
          Olá! Me chamo Vinicius Silva, sou um Desenvolvedor Full Stack apaixonado por tecnologia e soluções inovadoras. Desde 2021, venho me dedicando ao estudo da programação, sempre buscando aprimorar minhas habilidades e acompanhar as tendências do mercado.
Iniciei minha trajetória profissional como Auxiliar de TI em uma rede de supermercados, onde atuei por um ano prestando suporte aos usuários do sistema interno da empresa, monitorando micro-serviços e realizando consultas e updates no banco de dados. Essa experiência me proporcionou um entendimento sólido sobre infraestrutura, manutenção de sistemas e otimização de processos.
Atualmente, foco no desenvolvimento de aplicações web, buscando sempre criar soluções eficientes e intuitivas. Estou em constante aprendizado, explorando novas tecnologias e aprimorando minhas práticas para entregar projetos de qualidade.
Meu objetivo é crescer profissionalmente, contribuir com projetos desafiadores e colaborar com equipes dinâmicas.
          </p>
        </div>
        <img src={ImgBio} alt="" />
      </section>
    </div>
  )
}

export default About

import React from 'react'
import ButtonComponent from '../components/ButtonComponent'
import Whatsapp from '../assets/whatsapp.png'
import Linkedin from '../assets/linkedin.png'
import Github from '../assets/github.png'

const Style = {
  width: '100%',
  background: "#000000",
  color: "#fff",
  padding: "10px"
  
}
const phoneNumber = "5569993062435"
const linkedin = "https://www.linkedin.com/in/vinicius-silva-souza-08422b1a2/"
const github = "https://github.com/viniciusvss120"

function Contact() {
  return (
    <div className='contact-container'>
      <header className='contact-header'>
        <h2>Entre em contato</h2>
        <p>
          Sinta-se à vontade para entra em contato, basta preencher este formulário ou <br />
          entre em contato através do WhatsApp e/ou Linkedin.
        </p>
      </header>
      <section className='contact'>
        <form className='form' onSubmit={() => event?.preventDefault()}>
          <div className="style-form">
            <label>Nome</label>
            <input type="text" />
          </div>
          <div className="style-form">
            <label>E-mail</label>
            <input type="email" />
          </div>
          <div className="style-form">
            <label>Mensagem</label>
            <textarea name="mensagem" id="mensagem"></textarea>
          </div>

          <ButtonComponent
            label='Enviar'
            style={Style}
          />
        </form>
        <div className="redesSociais">
          <div className="contact-redes">
            <h4>Redes Sociais</h4>
            <ul>
              <li>
                <a href={`https://wa.me/${phoneNumber}`} target='_blank'>
                  <img className='redes-img' src={Whatsapp} alt="whatsapp" />
                </a>
              </li>
              <li>
                <a href={linkedin} target='_blank'>
                  <img className='redes-img' src={Linkedin} alt="linkedin" />
                </a>
              </li>
              <li>
                <a href={github} target='_blank'>
                  <img className='redes-img' src={Github} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

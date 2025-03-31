import React from 'react'
import { Dialog } from 'primereact/dialog';
import { certificados } from '../repository/certificados';

type CertificateProps = {
  activeDark: boolean
}

function Certificate({activeDark}: CertificateProps) {
  const [visible, setVisible] = React.useState<boolean>(false)
  const [title, setTitle] = React.useState('')
  const [img, setImg] = React.useState('')
  return (
    <div className='certificate-container' >
      <header className='certificate-header'>
        <h1 style={{color: activeDark ? "#fff": ""}}>Certificate</h1>
        <div className="divider-about"></div>
      </header>

      <section className='certificates'>
        <ul>
          {certificados.map((item) => (
            <li
              onClick={() => {
                setTitle(`${item.title}`) 
                setImg(`${item.img}`) 
                setVisible(true)
              }}
            >
               <img src={item.img} alt="" />
            </li>
          ))}
        </ul>
        {
          screen.width <= 768 ? '' :
          <Dialog 
            header={title}
            visible={visible}
            style={{ width: '45vw'}} 
            onHide={() => {if (!visible) return; setVisible(false); }}
          >
            <div className="dialog">
              <img src={img} alt="" />
            </div>
          </Dialog>
        }
      </section>
    </div>
  )
}

export default Certificate

import React from 'react'

type FooterDark = {
  activeDark: boolean
}

function Footer({activeDark}:FooterDark) {
  return (
    <footer className='footer' style={{color: !activeDark ? '#000' : '#fff' }}>
      <p>Projeto desenvolvido por mim <span style={{fontWeight: 600}}>Vinicius Silva Souza</span></p>
      <span>2025</span>
    </footer>
  )
}

export default Footer

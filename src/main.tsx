import { StrictMode } from 'react'
import {PrimeReactProvider} from 'primereact/api'

import 'primereact/resources/themes/lara-light-blue/theme.css';  // Tema
import 'primereact/resources/primereact.min.css';  // Estilos principais
import 'primeicons/primeicons.css';  // Ícones

import { createRoot } from 'react-dom/client'
import './index.css'
// import '/flags.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider>
    <App />
    </PrimeReactProvider>
  </StrictMode>,
)

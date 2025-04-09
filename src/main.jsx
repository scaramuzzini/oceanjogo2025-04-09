import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import JogoDaVelha from './JogoDaVelha.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JogoDaVelha />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>This is an app</div>
  </StrictMode>,
)

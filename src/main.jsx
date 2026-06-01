import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Styleguide from './pages/Styleguide.jsx'

const isStyleguide = window.location.search === '?styleguide'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isStyleguide ? <Styleguide /> : <App />}
  </StrictMode>,
)

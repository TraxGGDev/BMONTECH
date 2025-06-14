import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './router'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-gray-100 min-h-screen">
      <Router />
    </div>
  </StrictMode>,
)

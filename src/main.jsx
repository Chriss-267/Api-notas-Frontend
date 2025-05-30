import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from "./router"
import { NotasProvider } from './Context/NotasContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotasProvider>
      <RouterProvider router = {router} />
    </NotasProvider>
      
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter} from 'react-router-dom'
import {RouterProvider} from 'react-router-dom'
import PaginaSobre from './pages/Sobre/sobre'
import PaginaContato from './pages/Contato/contato'
import styled from 'styled-components'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: 'sobre',
    element: <PaginaSobre/>
  },
  {
    path: 'contato',
    element: <PaginaContato/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

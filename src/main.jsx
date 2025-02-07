import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import routes from './routes.jsx'
import AuthProvider from './AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={routes}></RouterProvider>
    <ToastContainer position="top-right" autoClose={500} />
    </AuthProvider>
  </StrictMode>,
)

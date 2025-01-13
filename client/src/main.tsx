import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './index.css'
import App from './App.tsx'
import MainLayout from './layouts/MainLayout.tsx';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        // element: <HomePage />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <RouterProvider router={router} />
    <ToastContainer position="bottom-right" /> */}
  </StrictMode>,
)

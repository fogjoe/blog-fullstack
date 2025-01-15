import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ClerkProvider } from '@clerk/clerk-react'
import './index.css'
// import App from './App.tsx'
import MainLayout from './layouts/MainLayout.tsx';
import HomePage from './routes/HomePage.tsx';
import PostListPage from './routes/PostListPage.tsx';
import SinglePostPage from './routes/SinglePostPage.tsx';
import Write from './routes/Write.tsx';
import LoginPage from './routes/LoginPage.tsx';
import RegisterPage from './routes/RegisterPage.tsx';

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: "/posts",
        element: <PostListPage />,
      },
      {
        path: "/:slug",
        element: <SinglePostPage />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
      <ToastContainer position="bottom-right" />
    </ClerkProvider>
  </StrictMode>,
)

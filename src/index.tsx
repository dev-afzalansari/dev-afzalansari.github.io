import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Projects from './pages/projects/Projects'
import SimpleJournal from './pages/projects/simple journal/Simple Journal'
import SJPrivacyPolicy from './pages/projects/simple journal/PrivacyPolicy'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/projects/simple-journal',
    element: <SimpleJournal />
  },
  {
    path: '/projects/simple-journal/privacy-policy',
    element: <SJPrivacyPolicy />
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

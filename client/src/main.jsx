import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.jsx'
import './index.css'
// React Router
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
// Layouts
import Layout from './layouts/Layout.jsx'
import ProtectedRoutes from './ProtectedRoutes.jsx'
import UserProfile from './pages/UserProfile.jsx'
import Courses from './pages/Courses.jsx'
import Course from './layouts/Course.jsx'

const router = createBrowserRouter([{
  element: <Root />,
  children: [
    {
      path: '/',
      element: <ProtectedRoutes />,
      children: [
        {
          element: <Layout />,
          children: [
            {
              path: 'course',
              element: <Course />,
              children: [
                {
                  path: 'home',
                  element: <div>Home page</div>
                },
                {
                  path: 'syllabus',
                  element: <div>Syllabus page</div>
                },
                {
                  path: 'assignments',
                  element: <div>Assignments page</div>
                },
                {
                  path: 'grades',
                  element: <div>Grades page</div>
                }
              ]
            },
            {
              path: '/',
              element: <div>Dashboard page</div>,
            },
            {
              path: '/profile',
              element: <UserProfile />,
            },
            {
              path: '/courses',
              element: <Courses />,
            },
            {
              path: 'settings',
              element: <div>Settings page</div>,
            },
          ]
        }
      ]
    },
    {
      path: 'login',
      element: <div>Login</div>
    },
    {
      path: 'signup',
      element: <div>Sign up</div>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

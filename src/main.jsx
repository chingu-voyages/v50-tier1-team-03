import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from "./components/ErrorPage.jsx"
import AboutPage from "./components/AboutPage.jsx"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/about",
    element: <AboutPage/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
{/* <App /> */}
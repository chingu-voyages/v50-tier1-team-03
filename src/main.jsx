import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from "./components/ErrorPage.jsx"
import AboutPage from "./components/AboutPage.jsx"
import MenuItemPage from "./components/menuComponents/MenuItemPage.jsx"
import Cart from "./components/cartComponents/Cart.jsx"
// import DrinkItemPage from "./components/menuComponents/DrinkItemPage.jsx"
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
  {
    path: "/test",
    element: <MenuItemPage/>
  },
  {
    path: "/menu/:itemId",
    element: <MenuItemPage/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
{/* <App /> */}
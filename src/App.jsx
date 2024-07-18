// import { useState } from 'react'
import menu from "../menu.json"
import Navbar from "./components/Navbar"

export default function App() {
  const meals = menu.meals 
  const bbqItems = meals.map((item) => {
    if (item.category.includes("bbq")) {
      return (
        <img src={item.image} alt={item.name} className="menu-img" />
      )       
    }
  })

  return (
    <>
    <Navbar/>
      {bbqItems}
    </>
  )
}

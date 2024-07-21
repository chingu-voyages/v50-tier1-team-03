// import { useState } from 'react'
import Header from "./components/Header.jsx"
import menu from "../menu.json"
import Footer from "./components/Footer.jsx"
import Section from "./components/Section"


function App() {
  const meals = menu.meals 
  const drinks = menu.drinks.slice(-6,-1)
  const desserts = menu.desserts.slice(0,6)

  const sideItems = meals.map((item) => {
    if (item.category.includes("side")) {
      return (
        <div className="flex menu-item-card">
        <div className="item-info">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
          <img src={item.image} alt={item.name} className="menu-img" />
        </div>
      )   
    } 
  })

  const bbqItems = meals.map((item) => {
    if (item.category.includes("bbq")) {
      return (
        <div className="flex menu-item-card">
        <div className="item-info">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
          <img src={item.image} alt={item.name} className="menu-img" />
        </div>
      )       
    }
  })

  const drinkItems = drinks.map((item) => {
    return (
      <div className="flex menu-item-card">
      <div className="item-info">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
        <img src={item.image} alt={item.name} className="menu-img" />
      </div>
    ) 
  })

  const dessertItems = desserts.map((item) => {
    return (
      <div className="flex menu-item-card">
      <div className="item-info">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
        <img src={item.image} alt={item.name} className="menu-img" />
      </div>
    ) 
  })

  return (
    <>
    <Header />
    <main>
      <Section 
        className="meals-section" 
        heading="BBQ Meals"
        content={bbqItems}
      />
      <Section 
        className="sides-section" 
        heading="Sides"
        content={sideItems}
      />
      <Section 
        className="drinks-section" 
        heading="Drinks"
        content={drinkItems}
      />
      <Section 
        className="desserts-section" 
        heading="Desserts"
        content={dessertItems}
      />
    </main>
    <Footer />

    </>
  )
}

export default App

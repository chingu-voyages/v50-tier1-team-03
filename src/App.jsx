// import { useState } from 'react'
import Header from "./components/Header.jsx"
import FeaturedItem from "./components/FeaturedItem.jsx"
import menu from "../menu.json"
import Footer from "./components/Footer.jsx"
import Section from "./components/Section"
import MenuNav from "./components/MenuNav.jsx"
import { Link } from "react-router-dom"

function App() {

  const meals = menu.meals.slice(-6)
  const sides = menu.meals.slice(26,40)
  const drinks = menu.drinks.slice(-6,-1)
  const desserts = menu.desserts.slice(0,6)

  function renderMenuItems(type) {
    const menuItem = type.map((item) => {
      return (
        <Link key={item.id} to={`/menu/${item.url}`}>
          <div className="flex menu-item-card">
            <div className="img-container">
              <img src={item.image} alt={item.name} className="menu-img" />
            </div>
            <div className="item-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.price}</p>
            </div>
          </div>
        </Link>
      )
    })
    return menuItem
  }

  const bbqItems = renderMenuItems(meals)
  const sideItems = renderMenuItems(sides)
  const drinkItems = renderMenuItems(drinks)
  const dessertItems = renderMenuItems(desserts)

  return (
    <>
      <Header />
      <FeaturedItem />
      <MenuNav/>
      <main>
        <Section 
          className="meals-section"
          id="bbq-meals" 
          heading="BBQ Meals"
          content={bbqItems}
        />
        <Section 
          className="sides-section" 
          id="sides"
          heading="Sides"
          content={sideItems}
        />
        <Section 
          className="drinks-section" 
          id="drinks"
          heading="Drinks"
          content={drinkItems}
        />
        <Section 
          className="desserts-section" 
          id="desserts"
          heading="Desserts"
          content={dessertItems}
        />
      </main>
      <Footer />
    </>
  )
}

export default App

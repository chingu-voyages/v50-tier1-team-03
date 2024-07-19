// import { useState } from 'react'
import menu from "../menu.json"
import Footer from "./components/Footer.jsx"
import Section from "./components/Section"


function App() {
  const meals = menu.meals 
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

  return (
    <>
    {/* <Header /> */}
    <main>
      <Section 
        className="meals-section" 
        heading="BBQ Meals"
        content={bbqItems}
      />
      <Section 
        className="sides-section" 
        heading="Sides"
        // content={sideItems}
      />
      <Section 
        className="drinks-section" 
        heading="Drinks"
        // content={drinks}
      />
      <Section 
        className="desserts-section" 
        heading="Desserts"
        // content={desserts}
      />
    </main>
          <Footer />

    </>
  )
}

export default App

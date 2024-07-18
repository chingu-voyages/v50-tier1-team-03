// import { useState } from 'react'
import menu from "../menu.json"
import Section from "./components/Section"

function App() {
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
    {/* <Footer /> */}
    </>
  )
}

export default App

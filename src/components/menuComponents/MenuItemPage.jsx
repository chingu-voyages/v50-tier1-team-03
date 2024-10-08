import { useParams } from "react-router-dom"
import { useState } from "react"
import menu from "../../../menu.json"
import Modifications from './Modifications'
import Options from './Options'
import AmountAddToCart from './AmountAddToCart'
import { Link } from "react-router-dom"

// item state- we could raise the item state up one component into the app. that way, 
// each window does not have it's own state. it's managed in one place.
export default function MenuItemPage(){
    const param = useParams()

    function isItem(item){
        return item.url === param.itemId
    }
    const menuItem = menu.meals.find(isItem) || menu.drinks.find(isItem)|| menu.desserts.find(isItem)

    function generateId(){
        return Math.floor(Math.random() * (99999-1) + 1)
    }

    const id = generateId()

    const [item, setItem] = useState({
        modifications:[], 
        addOns:[],
        amount: 0,
        name: menuItem.name,
        imageURL: menuItem.image,
        price: menuItem.price,
        id: id
    },)

    return(
        <main className="menu-item-page">
            {/* Instead of hard-coded values, use props*/}
            <h1>{menuItem.name}</h1> 
            <img src={menuItem.image} alt={menuItem.name} />
            <h2>{menuItem.name}</h2>
            <p>{menuItem.description}</p>

            <Modifications 
                modifications={menuItem.modifiers} 
                item={item}
                setItem={setItem}/>

            <Options 
                addOns={menuItem.addOns} 
                item={item}
                setItem={setItem}/>

            <AmountAddToCart item={item} setItem={setItem} menuItem={menuItem}/>
            <br />
            <br />
            <Link to="/"><button className="menu-return-btn">Return to Menu</button></Link>
        </main>
    )
}
import { useParams } from "react-router-dom"
import { useState } from "react"
import menu from "../../../menu.json"
import Modifications from './Modifications'
import Options from './Options'
import AmountAddToCart from './AmountAddToCart'

// item state- we could raise the item state up one component into the app. that way, 
// each window does not have it's own state. it's managed in one place.
export default function MenuItemPage(){
    const [item, setItem] = useState({
        modifications:[], 
        addOns:[],
        amount: 0,
    })

    const param = useParams()

    function isItem(item){
        return item.url === param.itemId
    }
    const menuItem = menu.meals.find(isItem) || menu.drinks.find(isItem)|| menu.desserts.find(isItem)
    return(
        <main className="menu-item-page">
            {/* Instead of hard-coded values, use props*/}
            <h1>{menuItem.name}</h1> 
            <img src={menuItem.image} alt={menuItem.name} />
            <h2>{menuItem.name}</h2>
            <p>{menuItem.description}</p>

            <Modifications 
                selectedItem={menuItem} 
                item={item}
                setItem={setItem}/>

            <Options />

            <AmountAddToCart />
        </main>
    )
}
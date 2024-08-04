
import { useParams } from "react-router-dom"
import menu from "../../../menu.json"
import Modifications from './Modifications'
import Options from './Options'
import AmountAddToCart from './AmountAddToCart'

// item state- we could raise the item state up one component into the app. that way, 
// each window does not have it's own state. it's managed in one place.
export default function DrinkItemPage(){
    const param = useParams()

    function isItem(item){
        return item.url === param.itemId
    }

    const drinkItem = menu.drinks.find(isItem)
    console.log(drinkItem)
    
    return(
        <>
            {/* Instead of hard-coded values, use props*/}
            <h1>{drinkItem.name}</h1> 
            <img src="" alt="Item Image" />
            <h2>{drinkItem.name}</h2>
            <h3>{drinkItem.description}</h3>

            <Modifications />

            <Options />

            <AmountAddToCart />
        </>
    )
}
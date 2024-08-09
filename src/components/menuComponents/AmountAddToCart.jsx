import { useState } from 'react'
import { useParams } from "react-router-dom"
import menu from "../../../menu.json" 
import { useCart } from "../../CartState"

export default function AmountAddToCart() {
    const [item, setItem] = useState({
        modifications:[], 
        addOns:[],
        amount: 0,
    })
    
    const [state1, setState1] = useCart()
    
    console.log({state1})
    const param = useParams()

    function isItem(item){
        return item.url === param.itemId
    }

    const menuItem = menu.meals.find(isItem) || menu.drinks.find(isItem) || menu.desserts.find(isItem)

    function handleAmountDecrease(){
        if (item.amount === 0){
            return
        }
        setItem(prevItem => ({...item, amount: prevItem.amount - 1}))
    }

    function handleAmountIncrease(){
        setItem(prevItem => ({...item, amount: prevItem.amount + 1}))
    }

    return(
       <div>
            <button className="quantity-btn" onClick={handleAmountDecrease}>
                {/* <div> */}
                    -
                {/* </div>  */}
            </button>
            <span className="item-amount">{item.amount}</span>
            <button className="quantity-btn" onClick={handleAmountIncrease}>
                {/* <div> */}
                      +
                {/* </div> */}
            </button>
            <button className="add-to-cart-btn">Add to Cart | ${menuItem.price*item.amount}</button>
        </div> 
    )
}
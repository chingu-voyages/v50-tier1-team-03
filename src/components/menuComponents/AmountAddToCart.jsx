import { useState } from 'react'
import { useParams } from "react-router-dom"
import menu from "../../../menu.json"    
    
export default function AmountAddToCart() {
    const [item, setItem] = useState({
        modifications:[], 
        addOns:[],
        amount: 0,
    })

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
            <button onClick={handleAmountDecrease}>
                <div>
                    -
                </div> 
            </button>
            <span>{item.amount}</span>
            <button onClick={handleAmountIncrease}>
                <div>
                      +
                </div>
            </button>
            <button>Add to Cart | ${menuItem.price*item.amount}</button>
        </div> 
    )
}
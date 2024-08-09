import { useState } from 'react'
import { useParams } from "react-router-dom"
import menu from "../../../menu.json"     
import { useCart } from "../../CartState"

export default function AmountAddToCart({item, setItem, menuItem}) {

    const [cart, setCart] = useCart()

    function handleAmountDecrease(){
        if (item.amount === 0){
            return
        }
        setItem(prevItem => ({...item, amount: prevItem.amount - 1}))
    }

    function handleAmountIncrease(){
        setItem(prevItem => ({...item, amount: prevItem.amount + 1}))
    }

    function addToCart(){
        {/*
            1. Pass menuItem state to f(n)
            2. Append item to cart while saving previous cart entries
            */}
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
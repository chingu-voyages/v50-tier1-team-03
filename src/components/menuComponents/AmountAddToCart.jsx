import { useState, useEffect } from 'react'

export default function AmountAddToCart({item, setItem, menuItem}) {
// currently we are saving the item to localstorage as just an item. need to make it an array of items.
// each item will eventually render
/* 
{
  "cart" : [
    {
      "modifications" : [],
      "addOns" : [],
      "amount" : 0
    },
  ]
}

*/
    function addToCartStorage(){
        const currentCart = JSON.parse(localStorage.getItem("cart"))
        if (currentCart){
            console.log("true")
            console.log(currentCart)
            const updatedCart = JSON.stringify(currentCart.push(item))
            // currentCart.push(item)
            localStorage.setItem("cart", JSON.stringify(updatedCart))
            // console.log(localStorage.cart)
        } else{
            // console.log("false")
            const initialItem = JSON.stringify([item])
            localStorage.setItem("cart", initialItem)
            console.log(localStorage)
        }
    }

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
            <button className="add-to-cart-btn" onClick={addToCartStorage}>Add to Cart | ${menuItem.price*item.amount}</button>
        </div> 
    )
}
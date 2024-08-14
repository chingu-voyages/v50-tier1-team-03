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
    /* reuse
    JSON.parse(localStorage.getItem("cart"))
    JSON.stringify(currentCart.push(item))
    */
    function addToCartStorage(){
        const currentCart = JSON.parse(localStorage.getItem("cart"))
        if (currentCart){
            const updatedCart = currentCart.concat(item)
            localStorage.setItem("cart", JSON.stringify(updatedCart))
            return
        } else{
            const initialItem = JSON.stringify([item])
            localStorage.setItem("cart", initialItem)
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
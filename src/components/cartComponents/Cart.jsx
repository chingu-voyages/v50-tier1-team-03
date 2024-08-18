import Header from "../Header"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Cart() {
    const [triggerRender, setTriggerRender] = useState(true)

    function getCartFromStorage(){
        return JSON.parse(localStorage.getItem("cart"))
    }
    function generateId(){
        return Math.floor(Math.random() * (99999-1) + 1)
    }

    function removeItem(e){
        console.log(e.target.id)
        const cart = getCartFromStorage()
        const newCart = cart.filter(item => {
            console.log(item.id)
            return item.id != e.target.id
        })
        localStorage.setItem("cart", JSON.stringify(newCart))
        setTriggerRender(!triggerRender)
    }

    function renderCart(cart){
        if (cart){
            const code = cart.map(item => {
                const itemKey = item.id
                console.log(`Item:${item.name}, Key:${itemKey}`)
                return (
                <div key={itemKey}>
                    <div className="cart-item">
                        <h3>{item.name}<span id="quantity"></span></h3>
                        <p className="item-price">${item.price * item.amount}</p>
                    </div>
                    <button className="cart-btn">Edit</button>
                    <button className="cart-btn" id={itemKey} onClick={removeItem}>Remove</button>
                </div>
                )
            })
            return code
        }
    }

    function calculateTotal(cart){
        if (cart){
            let total = 0
            for (let i = 0; i < cart.length; i++){
                total = total + (cart[i].price * cart[i].amount)
            }
            return total
        }
    }
   
    const cart = getCartFromStorage()
    const cartItems = renderCart(getCartFromStorage())
    const finalPrice = calculateTotal(cart)
    
    return(
        <>
            <Header />
            {cart.length > 0 ? <section className="cart-section">
                <h2 className="cart-heading">Your Order 🍔</h2>
                {cartItems}
                <div className="checkout-el">
                    <p className="total-el">Total: <span id="total-el">${finalPrice}</span></p>
                    <Link to='/checkout'><button className="checkout-btn">Check out</button></Link>
                </div>
            </section> : <h1>Empty cart.</h1>}
            
        </>
    )
}

import Header from "../Header"

export default function Cart() {
    function getCartFromStorage(){
        return JSON.parse(localStorage.getItem("cart"))
    }
    function generateId(){
        return Math.floor(Math.random() * (99999-1) + 1)
    }
    function renderCart(cart){
        if (cart){
            const code = cart.map(item => {
                return (
                <div key={generateId()}>
                    <div className="cart-item">
                        <h3>{item.name}<span id="quantity"></span></h3>
                        <p className="item-price">${item.price * item.amount}</p>
                    </div>
                    <button className="cart-btn">Edit</button>
                    <button className="cart-btn">Remove</button>
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
            {cart ? <section className="cart-section">
                <h2 className="cart-heading">Your Order 🍔</h2>
                {cartItems}
                <div className="checkout-el">
                    <p className="total-el">Total: <span id="total-el">${finalPrice}</span></p>
                    <button className="checkout-btn">Check out</button>
                </div>
            </section> : <h1>Empty cart.</h1>}
            
        </>
    )
}

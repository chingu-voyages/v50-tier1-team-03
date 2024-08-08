import Header from "../Header"

export default function Cart() {
    return(
        <>
            <Header />
            <section className="cart-section">
                <h2 className="cart-heading">Your Order 🍔</h2>
                <div className="cart-item">
                    <h3>Item name <span id="quantity"></span></h3>
                    <p>$ (Item price)</p>
                </div>
                <button className="cart-btn">Edit</button>
                <button className="cart-btn">Remove</button>
                <div className="cart-item">
                    <h3>Item name <span id="quantity"></span></h3>
                    <p>$ (Item price)</p>
                </div>
                <button className="cart-btn">Edit</button>
                <button className="cart-btn">Remove</button>
                <div className="cart-item">
                    <h3>Item name <span id="quantity"></span></h3>
                    <p>$ (Item price)</p>
                </div>
                <button className="cart-btn">Edit</button>
                <button className="cart-btn">Remove</button>
                <div className="checkout-el">
                    <p>Total: <span id="total-el">$50.00</span></p>
                    <button className="checkout-btn">Check out</button>
                </div>
            </section>
        </>
    )
}

import Header from "../Header"

export default function Cart() {
    return(
        <>
            <Header />
            <section className="cart-section">
                <div className="cart-item">
                    <h2>Item name <span id="quantity"></span></h2>
                    <p>$ (Item price)</p>
                </div>
                <button>Edit</button>
                <button>Remove</button>
                <div className="cart-item">
                    <h2>Item name <span id="quantity"></span></h2>
                    <p>$ (Item price)</p>
                </div>
                <button>Edit</button>
                <button>Remove</button>
                <div className="cart-item">
                    <h2>Item name <span id="quantity"></span></h2>
                    <p>$ (Item price)</p>
                </div>
                <button>Edit</button>
                <button>Remove</button>
                <div className="checkout-el">
                    <p>Total: <span id="total-el">$50.00</span></p>
                    <button className="checkout-btn">Check out</button>
                </div>
            </section>
        </>
    )
}

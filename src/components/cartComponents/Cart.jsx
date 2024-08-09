import Header from "../Header"
import { useCart } from "../../CartState"

export default function Cart() {
    
    const [state1, setState1] = useCart()

    console.log({state1})
    
    return(
        <>
            <Header />
            <section className="cart-section">
                <div className="cart-item">
                    <h2>Item name <span id="quantity"></span></h2>
                    <p>$ (Item price)</p>
                </div>
                <div className="cart-item">
                    <h2>Item name <span id="quantity"></span></h2>
                    <p>$ (Item price)</p>
                </div>
                <div className="cart-item">
                    <h2>Item name <span id="quantity"></span></h2>
                    <p>$ (Item price)</p>
                </div>
                <div className="checkout-el">
                    <p>Total: <span id="total-el">$50.00</span></p>
                    <button className="checkout-btn">Check out</button>
                </div>
            </section>
        </>
    )
}

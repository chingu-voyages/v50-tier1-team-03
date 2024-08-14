import Header from "./Header";
import Footer from "./Footer";

export default function Checkout() {

    let subtotal = 0;
    let credit = 0;

    return (
        <>
        <Header />
        <section className="checkout-section">

            {/* Display subtotal */}
            <div className="subtotal">
                <h2>Your subtotal is: ${subtotal}.</h2>
            </div>

            {/* Add tip */}
            <div className="add-tip">
                <h3>Would you like to add a tip?</h3>
                <div className="tip-options">
                    <button className="tip-btn">0%</button>
                    <button className="tip-btn">10%</button>
                    <button className="tip-btn">15%</button>
                    <button className="tip-btn">20%</button>
                </div>
            </div>

            {/* Add credit */}
            <div className="add-credit">
                <h3>Would you like to add credit? Your current credit is: ${credit}.</h3>
                <form>
                    <label>Enter credit:</label><br />
                    <input className="credit-input" type="text" /><br />
                    <input className="submit-btn" type="submit" value="Add Credit" />
                </form>
            </div>
            
            {/* Checkout */}
            <div className="checkout-final">
                <button className="checkout-btn-final">Check Out</button>
            </div>

        </section> 
        <Footer />
        </>
    )
}
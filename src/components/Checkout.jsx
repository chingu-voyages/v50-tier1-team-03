import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Checkout() {

    // Variables for checkBalance fn
    const success = document.querySelector('.payment-success');
    const fail = document.querySelector('.payment-fail');

    let subtotal = 0;
    let tip = 0;

    let credit = 0;

    function addCredit() {

    }

    function checkBalance() {
        if (subtotal >= credit){
            credit -= subtotal;
            success.classList.remove('hidden');
        } else {
            fail.classList.remove('hidden');
        }
    }

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
                    <input className="submit-btn" type="submit" value="Add Credit" onClick={addCredit} />
                </form>
            </div>
            
            {/* Checkout */}
            <div className="checkout-final">
                <button className="checkout-btn-final" onClick={checkBalance}>Check Out</button>
            </div>

                    {/* Hidden in CSS by default*/}
            <div className={'payment-success hidden'}>
                <p>Payment successful!</p>
                <Link to="/"><button className="menu-return-btn">Return to Menu</button></Link>
            </div>
            <div className={'payment-fail hidden'} >
                <p>Insufficient balance, please add more credit.</p>
            </div>

        </section> 
        <Footer />
        </>
    )
}
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Checkout() {
    
    let subtotal = 1; //Placeholder until we can carry over the total from the Cart element
    let tipModifier = 1;
    let total = subtotal;
    let credit = 0;

//Tip modifier functions
    function tipZero() {
        tipModifier = 1;
        total = subtotal*tipModifier;
    }
    function tipTen() {
        tipModifier = 1.1;
        total = subtotal*tipModifier;
    }
    function tipFifteen() {
        tipModifier = 1.15;
        total = subtotal*tipModifier;
    }
    function tipTwenty() {
        tipModifier = 1.2;
        total = subtotal*tipModifier;
    }

//Add credit function
    function addCredit() {

    }

//Check balance function
    const success = document.querySelector('.payment-success');
    const fail = document.querySelector('.payment-fail');

    function checkBalance() {
        if (!success.classList.contains('hidden')){
            success.classList.add('hidden');
        }
        if (!fail.classList.contains('hidden')){
            fail.classList.add('hidden');
        }

        if (total <= credit){
            credit -= total;
            success.classList.remove('hidden');
        } else {
            fail.classList.remove('hidden');
        }
    }

//Page build
    return (
        <>
        <Header />
        <section className="checkout-section">

            {/* Display subtotal */}
            <div className="subtotal">
                <h2>Your subtotal is: ${total}.</h2>
            </div>

            {/* Add tip */}
            <div className="add-tip">
                <h3>Would you like to add a tip?</h3>
                <div className="tip-options">
                    <button className="tip-btn" onClick={tipZero}>0%</button>
                    <button className="tip-btn" onClick={tipTen}>10%</button>
                    <button className="tip-btn" onClick={tipFifteen}>15%</button>
                    <button className="tip-btn" onClick={tipTwenty}>20%</button>
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
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Checkout() {
//Functions to retrieve cart total from storage
    function getCartFromStorage(){
        return JSON.parse(localStorage.getItem("cart"))
    }
    function calculateTotal(cart){
        if (cart){
            let total = 0
            for (let i = 0; i < cart.length; i++){
                total = total + (cart[i].price * cart[i].amount)
            }
            return total
        //Makes total $0 if nothing in cart
        } else {
            let total = 0;
            return total;
        }
    }

//Checkout page variables
    const cart = getCartFromStorage();
    const subtotal = calculateTotal(cart);
    let tipModifier = 1;
    const [total, setTotal] = useState(subtotal.toFixed(2));
    const [credit, setCredit] = useState(0);
    const success = document.querySelector('.payment-success');
    const fail = document.querySelector('.payment-fail');

// functions to retrieve/update credit in local storage
    useEffect(function getCredit(){
        const currentCredit = JSON.parse(localStorage.getItem("credit"))
        if (currentCredit){
            setCredit(currentCredit)
        }
    }, [])

    useEffect(function updateLocalStorageCredit(){
        const currentCredit = localStorage.getItem("credit")
        if (currentCredit){
            localStorage.setItem("credit", JSON.stringify(credit))
            return
        } else{
            localStorage.setItem("credit", JSON.stringify(credit))
        }
    }, [credit])

//Tip modifier functions
    function tipZero() {
        tipModifier = 1;
        setTotal((subtotal*tipModifier).toFixed(2));
    }
    function tipTen() {
        tipModifier = 1.10;
        setTotal(
            (Math.round(subtotal*tipModifier*100)/100).toFixed(2)
        );
    }
    function tipFifteen() {
        tipModifier = 1.15;
        setTotal(
            (Math.round(subtotal*tipModifier*100)/100).toFixed(2)
        );
    }
    function tipTwenty() {
        tipModifier = 1.2;
        setTotal(
            (Math.round(subtotal*tipModifier*100)/100).toFixed(2)
        );
    }

//Add credit functions
    function addTen() {
        setCredit(credit + 10);
    }
    function addTwentyFive() {
        setCredit(credit + 25);
    }
    function addFifty() {
        setCredit(credit + 50);
    }
    function clearCredit() {
        setCredit(0);
    }

//Check balance function
    function checkBalance() {
        if (!success.classList.contains('hidden')){
            success.classList.add('hidden');
        }
        if (!fail.classList.contains('hidden')){
            fail.classList.add('hidden');
        }

        if (total <= credit){
            setTotal((0).toFixed(2));
            success.classList.remove('hidden');
            localStorage.removeItem("cart"); //Should find way to clear cart without dumping memory so that credit doesn't get dumped too
            setCredit(
                Math.round((credit-total)*100)/100
            );
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
            <div className="total">
                <h2>Your total is: ${total}.</h2>
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
                <div className="credit-options">
                    <div className="add-credit-btns">
                        <button className="credit-btn" onClick={addTen}>$10</button>
                        <button className="credit-btn" onClick={addTwentyFive}>$25</button>
                        <button className="credit-btn" onClick={addFifty}>$50</button>
                    </div>
                    <div className="remove-credit-btns">
                        <button className="clear-credit-btn" onClick={clearCredit}>Clear Credit</button>
                    </div>
                </div>
            </div>
            
            {/* Checkout */}
            <div className="checkout-final">
                <button className="checkout-btn-final" onClick={checkBalance} disabled={credit === 0}>Check Out</button>
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
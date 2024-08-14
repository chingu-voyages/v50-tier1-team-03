import Header from "./Header";
import Footer from "./Footer";

export default function Checkout() {


    return (
        <>
        <Header />
        <section className="checkout-section">

            {/* Display subtotal */}
            <div className="subtotal">
                
            </div>

            {/* Add tip */}
            <div className="add-tip">

            </div>

            {/* Add credit */}
            <div className="add-credit">

            </div>
            
            {/* Checkout */}
            <div className="checkout-final">

            </div>

        </section> 
        <Footer />
        </>
    )
}
import Header from "../Header"
import {useCartContext} from "./CartContextProvider.jsx";
import { useParams } from "react-router-dom"
import menu from "../../../menu.json"
import CartItem from './CartItem';

export default function Cart() {

    const { CartState } = useCartContext()
    const { totalCost } = 0

    // this part of code come from AmountAddToCart

    const param = useParams()

    function isItem(item){
        return item.url === param.itemId
    }

    const menuItem = menu.meals.find(isItem) || menu.drinks.find(isItem) || menu.desserts.find(isItem)

    // copy code end



    return(
        <>
            <Header />
            <div>
                <h2>Shopping Cart</h2>
                <ul>
                    {cart.map(item => (
                        <CartItem item={item} />
                    ))}
                </ul>
                <div>
                    Total: ${cart.reduce((total, item) => total + menuItem.price * item.amount, 0)}
                </div>
            </div>
        </>
    )
}

import { useState } from 'react'
import { useParams } from "react-router-dom"
import menu from "../../menu.json"
// pass cart state, item state?, and json menu item props.

// item state- we could raise the item state up one component into the app. that way, 
// each window does not have it's own state. it's managed in one place.
export default function MenuItemPage(){
    const [item, setItem] = useState({
        modifications:[], 
        addOns:[],
        amount: 0,
    })
    // // console.log(item)

    const param = useParams()

    function isItem(item){
        return item.url === param.itemId
    }

    const menuItem = menu.meals.find(isItem)
    console.log(menuItem)



    function handleModification(e){
        const newModification = e.target.textContent
        if (item.modifications.includes(newModification)){
            return
        }
        setItem(prevItem => {
            return {
                ...prevItem, 
                modifications: [...prevItem.modifications, newModification]
            }
        })
    }

    function handleAddOn(e){
        const newAddOn = e.target.textContent
        if(item.addOns.includes(newAddOn)){
            return
        }
        setItem(prevItem => {
            return {
                ...prevItem, 
                addOns: [...prevItem.addOns, newAddOn]
            }
        })
    }
    
    function handleAmountIncrease(){
        setItem(prevItem => ({...item, amount: prevItem.amount + 1}))
    }

    function handleAmountDecrease(){
        if (item.amount === 0){
            return
        }
        setItem(prevItem => ({...item, amount: prevItem.amount - 1}))
    }
    
    return(
        <>
            {/* Instead of hard-coded values, use props*/}
            <h1>{menuItem.name}</h1> 
            <img src="" alt="Item Image" />
            <h2>{menuItem.name}</h2>
            <h3>{menuItem.description}</h3>
            {/* Component for Modifications? */}
            <div className='modifications-container'>
                <h4>Modifiers:</h4>
                <h5>Required *</h5>
                <button onClick={(e) => handleModification(e)}>Toasted Brioche Bun</button>
                <button onClick={(e) => handleModification(e)}>Gluten-Free Bun</button>
            </div>

            {/* Component for Options? */}
            <div className='options-container'>
                <h4>Add-Ons:</h4>
                <h5>Required *</h5>
                <button onClick={(e) => handleAddOn(e)}>Pickles</button>
                <button onClick={(e) => handleAddOn(e)}>Carmalized Onions</button>
                <button onClick={(e) => handleAddOn(e)}>Extra Tangy BBQ Sauce</button>
            </div>

            {/* Component for Counter/Checkout Btn */}
            <div>
                <button onClick={handleAmountDecrease}>
                    <div>
                        -
                    </div> 
                </button>
                <span>{item.amount}</span>
                <button onClick={handleAmountIncrease}>
                    <div>
                        +
                    </div>
                </button>

                <button>Add to Cart | ${menuItem.price}</button>
            </div>
        </>
    )
}
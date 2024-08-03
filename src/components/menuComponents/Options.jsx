export default function Options(){
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
    
    return(
        <div className='options-container'>
            <h4>Add-Ons:</h4>
            <h5>Required *</h5>
            <button onClick={(e) => handleAddOn(e)}>Pickles</button>
            <button onClick={(e) => handleAddOn(e)}>Carmalized Onions</button>
            <button onClick={(e) => handleAddOn(e)}>Extra Tangy BBQ Sauce</button>
        </div>
    )
}
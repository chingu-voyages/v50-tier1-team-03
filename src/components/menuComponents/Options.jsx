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
            <p className="required">Required *</p>
            <button className="option-btn" onClick={(e) => handleAddOn(e)}>Pickles</button>
            <button className="option-btn" onClick={(e) => handleAddOn(e)}>Carmalized Onions</button>
            <button className="option-btn" onClick={(e) => handleAddOn(e)}>Extra Tangy BBQ Sauce</button>
        </div>
    )
}
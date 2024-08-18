export default function Options({addOns, item, setItem}){
    if (addOns){
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

        const addOnBtns = addOns.map(addOn => {
            return(
            <button
                key={addOn}
                className="option-btn" 
                onClick={(e) => handleAddOn(e)}>
                    {addOn}
            </button>)
        })

        return(
            <div className='options-container'>
                <h4>Add-Ons:</h4>
                <p className="required">Required *</p>
                {addOnBtns}
            </div>
        )
    }
}
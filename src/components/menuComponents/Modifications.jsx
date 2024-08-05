export default function Modifications(){
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

    return(
    <   div className='modifications-container'>
            <h4>Modifiers:</h4>
            <p className="required">Required *</p>
            <button className="modification-btn" onClick={(e) => handleModification(e)}>Toasted Brioche Bun</button>
            <button className="modification-btn" onClick={(e) => handleModification(e)}>Gluten-Free Bun</button>
        </div>
    )
}
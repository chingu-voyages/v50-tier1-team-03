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
            <h5>Required *</h5>
            <button onClick={(e) => handleModification(e)}>Toasted Brioche Bun</button>
            <button onClick={(e) => handleModification(e)}>Gluten-Free Bun</button>
        </div>
    )
}
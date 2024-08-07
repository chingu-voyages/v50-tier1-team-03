export default function Modifications({modifications, item, setItem}){
    if (modifications){
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
    
        const modifierBtns = modifications.map(modifier => {
            return(
            <button
                key={modifier}
                className="modification-btn" 
                onClick={(e) => handleModification(e)}>
                    {modifier}
            </button>)
        })
    
        return(
        <   div className='modifications-container'>
                <h4>Modifiers:</h4>
                <p className="required">Required *</p>
                {modifierBtns}
            </div>
        )
    }
}
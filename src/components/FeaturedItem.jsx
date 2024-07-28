import React from "react";

// Placeholders for now, will add functionality to call details (image, menu item, description, price)
const FeaturedItem = () => {
    return(
        <section className="featured-item">
            <div className="item-image">
               <img src="src/assets/shredded-shroom.png" alt="Shredded Shroom Sandwich" className="featured--item__image"></img>
            </div>
            <div className="item-description">
                <h2>Item of the Month!</h2>
                <h3>Filler menu item title.</h3>
                <p>This is filler text for where the item description will go.</p>
            </div>
        </section>
    )
}

export default FeaturedItem

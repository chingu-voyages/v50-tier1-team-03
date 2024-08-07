import React from "react";

// Placeholders for now, will add functionality to call details (image, menu item, description, price)
const FeaturedItem = () => {
    return(
        <section className="featured-item">
            <h2>Item of the Month!</h2>
            <div className="item-image">
               <img src="../../assets/shredded-shroom.png" alt="Shredded Shroom Sandwich" className="featured--item__image"></img>
            </div>
            <div className="item-description">
                <h3>Micha's Shredded Shroom Sandwich</h3>
                <p>Micha prefers a pulled pork sandwich without the meat! Try her shredded, barbeque-slathered crimini mushrooms topped with a refreshing cabbage apple slaw.</p>
            </div>
        </section>
    )
}

export default FeaturedItem

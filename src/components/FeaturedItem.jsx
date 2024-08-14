import React from "react";

const FeaturedItem = () => {
    return(
        <section className="featured-item">
            <h2>Item of the Month!</h2>
            <div className="divider"></div>
            <div className="item-image">
               <img src="https://raw.githubusercontent.com/chingu-voyages/v50-tier1-team-03/development/src/assets/shredded-shroom.png" alt="Shredded Shroom Sandwich" className="featured--item__image"></img>
            </div>
            <div className="item-description">
                <h3>Micha's Shredded Shroom Sandwich</h3>
                <p>Micha prefers a pulled pork sandwich without the meat! Try her shredded, barbeque-slathered crimini mushrooms topped with a refreshing cabbage apple slaw.</p>
            </div>
        </section>
    )
}

export default FeaturedItem

import React from "react"
import linkedin from "../assets/linkedin.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
import github from "../assets/github.png"

const Footer = () => {
    return(
        <div className = "Footer">
            <div className = "RepoAndPrimacy"></div>
            <a href = "https://github.com/chingu-voyages/v50-tier1-team-03" target = "_blank">
                Repository Link
                <img src={github} alt={""}/>
            </a>
            <a href = "https://www.chingu.io/privacy" target = "_blank">Primacy Terms</a>

            <div className = "SocialMedia">
                <p><img src={linkedin} alt={""}/></p>
                <p><img src={instagram} alt={""}/></p>
                <p><img src={twitter} alt={""}/></p>
            </div>
            <p>© 2024 Chingu, Inc. All rights reserved</p>
        </div>
    )
}

export default Footer;
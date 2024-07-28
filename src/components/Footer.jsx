import React from "react"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"

const Footer = () => {
    return(
        <div className = "Footer">
            <link rel="stylesheet" href="src/index.css"></link>
            <div className = "FooterLink">
                <h3>Source Code</h3>
                <a href = "https://github.com/chingu-voyages/v50-tier1-team-03" style={{color: "white"}} target = "_blank">
                    Repository Link
                <img src={github} style={{width:"5%"}} alt={""}/>
                </a>
            </div>
            <div className ="FooterLink">
                <h3>Terms and Privacy</h3>
                <a href = "https://www.chingu.io/privacy" style={{color: "white"}} target = "_blank">Primacy Terms</a>
            </div>
            <div className = "FooterLink">
                <h3>Social Media</h3>
                <a href="https://www.linkedin.com/company/chingu-os/"><img src={linkedin} style={{width:"3%"}} alt={""}/></a>
                <a href="https://twitter.com/ChinguCollabs"><img src={twitter} style={{width:"3%"}} alt={""}/></a>
            </div>
            <div className = "FooterNote">
                <p>© 2024 Chingu, Inc. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;

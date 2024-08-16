import React from "react"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer--link">
                <h3>Source Code</h3>
                <a href="https://github.com/chingu-voyages/v50-tier1-team-03" style={{color: "white"}} target="_blank">
                    Repository Link
                    <img src={github} alt={""} className="github--icon"/>
                </a>
            </div>
            <div className ="footer--link">
                <h3>Terms and Privacy</h3>
                <a href="https://www.chingu.io/privacy" style={{color: "white"}} target = "_blank">Privacy Terms</a>
            </div>
            <div className="footer--link">
                <h3>Social Media</h3>
                <div className="social--links">
                <a href="https://www.linkedin.com/company/chingu-os/"><img src={linkedin} alt={""} className="footer--icon"/>
                    <span className="sr-only">Chingu LinkedIn Profile</span>
                </a>
                <a href="https://twitter.com/ChinguCollabs"><img src={twitter} alt={""} className="footer--icon"/>
                <span className="sr-only">Chingu X Profile</span>

                </a>
                </div>
            </div>
            <div className="footer--note">
                <p>© 2024 Chingu, Inc. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;

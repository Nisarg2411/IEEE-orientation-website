import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} <a className="site" href="https://www.vgecg.ac.in/ieee.php">IEEE VGEC SB</a>
                    </span>
                </div>
                <a
                    href="https://www.linkedin.com/company/ieeevgecsb/mycompany/"
                    target="_blank"
                    className="item3"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                    href="https://www.facebook.com/ieeevgecsb"
                    target="_blank"
                    className="item4"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                    href="https://www.instagram.com/ieeevgecsb/"
                    target="_blank"
                    className="item5"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
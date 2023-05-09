import React from 'react'
import { linksData, socialLinksData } from '../data/data'

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="section footer">
                <ul className="footer-links">
                    {
                        linksData.map((link) => {
                            return <li key={link.id} id={link.id}>
                                <a href={link.path} className="footer-link">{link.text}</a>
                            </li>
                        })
                    }
                    {/* <li>
                        <a href="#home" className="footer-link">home</a>
                    </li>
                    <li>
                        <a href="#about" className="footer-link">about</a>
                    </li>
                    <li>
                        <a href="#services" className="footer-link">services</a>
                    </li>
                    <li>
                        <a href="#featured" className="footer-link">featured</a>
                    </li> */}
                </ul>
                <ul className="footer-icons">
                    {
                        socialLinksData.map((link) => {
                            return <li key={link.id}>
                                <a href={link.url} target="_blank" className="footer-icon" rel="noreferrer">
                                    <i className={link.icon}></i>
                                </a>
                            </li>
                        })
                    }
                    {/* <li>
                        <a href="https://www.twitter.com" target="_blank" className="footer-icon" rel="noreferrer"
                        ><i className="fab fa-facebook"></i
                        ></a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com" target="_blank" className="footer-icon" rel="noreferrer"
                        ><i className="fab fa-twitter"></i
                        ></a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com" target="_blank" className="footer-icon" rel="noreferrer"
                        ><i className="fab fa-squarespace"></i
                        ></a>
                    </li> */}
                </ul>
                <p className="copyright">
                    copyright &copy; Backroads travel tours company.
                    <br />
                    <span id="date">{new Date().getFullYear()}</span> all rights reserved
                </p>
            </footer>
        </React.Fragment>
    )
}

export default Footer
import React from 'react';
import logo from '../assets/images/logo.svg';
import { linksData, socialLinksData } from '../data/data.js';

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <img src={logo} className="nav-logo" alt="backroads" />
                        <button type="button" className="nav-toggle" id="nav-toggle">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    {/* <!-- left this comment on purpose --> */}

                    <ul className="nav-links" id="nav-links">
                        {linksData.map((link) => {
                            return <li key={link.id} id={link.id}>
                                <a href={link.path} className="nav-link">{link.text}</a>
                            </li>
                        })}
                    </ul>

                    <ul className="nav-icons">
                        {
                            socialLinksData.map((link) => {
                                return <li key={link.id}>
                                    <a href={link.url} target="_blank" className="nav-icon" rel="noreferrer">
                                        <i className={link.icon}></i>
                                    </a>
                                </li>
                            })
                        }
                        {/* <li>
                            <a href="https://www.twitter.com" target="_blank" className="nav-icon" rel="noreferrer"
                            ><i className="fab fa-facebook"></i
                            ></a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com" target="_blank" className="nav-icon" rel="noreferrer"
                            ><i className="fab fa-twitter"></i
                            ></a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com" target="_blank" className="nav-icon" rel="noreferrer"
                            ><i className="fab fa-squarespace"></i
                            ></a>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar   
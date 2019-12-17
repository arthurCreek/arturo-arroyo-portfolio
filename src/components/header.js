import React from 'react';
import { Link } from "gatsby";

const Header = (props) => {

    // function toggleShow() {
    //     document.querySelector('.header__nav').classList.toggle('Navbar__ToggleShow');
    //     document.querySelector('.header').classList.toggle('header__open');
    // }
    
    return (
        
        <header className="header">
            <div>Header</div>
        {/*
            <div className="header__container">
                <img src={logo} alt="company logo" className="logo" id="header-logo" />
                <img src={menu_logo} alt="menu icon" className="header__menu-logo" onClick={toggleShow}/>
                <div className="heaver__nav-container">
                    <nav className="header__nav">
                        <ul className="header__list">
                            <li><Link className="header__list-item" to="/">Home</Link></li>
                            <li><Link className="header__list-item" to="/about/">About Us</Link></li>
                            <li><Link className="header__list-item" to="/services/">Services</Link></li>
                            <li><Link className="header__list-item" to="/portfolio/">Portfolio</Link></li>
                            <li><Link className="header__list-item" to="/faq/">FAQ</Link></li>
                            <li><Link className="header__list-item" to="/contact_us/">Contact Us</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        */}
        </header>
    )

}

export default Header;


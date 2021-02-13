import React, { useState } from 'react';
import MobileMenu from './MobileMenu';
import './styles/NavBar.css';
import Button from '../components/Button';

const NavBar = () => {
    const [showMobileMenu, setMobileMenu] = useState(false);
    
    return (
        <React.Fragment>
            <nav className="nav-bar">
                <div className="container-logo">
                    <a href="/Home" style={{cursor:"pointer", border:"none"}}>
                        <div className="logo"></div>
                    </a>
                </div>

                <div className="nav-links nav-item">
                    <ul className="nav-ul-links">
                        <li className="nav-link"><a href="/Download">Download</a></li>
                        <li className="nav-link"><a href="/Plans">Plans</a></li>
                    </ul>
                </div>
                <div></div>
                <div className="nav-item ls-btns">
                    <Button backgroundColor="white" 
                            borderColor="#2d96c8"
                            textColor="#2d96c8" 
                            paddingWidth="30px" 
                            paddingHeigth="10px"
                            text="Log in" 
                            url="#"
                            fontsize="14px"
                            marginRigth="15px"></Button>
                    <Button backgroundColor="#2d96c8" 
                            borderColor="#2d96c8"
                            textColor="white" 
                            paddingWidth="30px" 
                            paddingHeigth="10px"
                            text="Sign in" 
                            url="#"
                            fontsize="14px"
                            marginRigth="0px"></Button>
                </div>
            </nav>

            <div className="hamburger" onClick={()=>{setMobileMenu(!showMobileMenu)}}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            
            {(showMobileMenu)?<MobileMenu></MobileMenu>:null}
        </React.Fragment>
    );
};

export default NavBar;
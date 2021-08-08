import React from 'react'
import "./Header.scss";
import { Button } from 'react-bootstrap';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="	https://www.lenzgig.com/static/static/img/header-logo.png" alt="" />
                <h3>Blog</h3>
                <h3>News</h3>
                <h3>Become a Creator</h3>
            </div>
            <div className="button">
                <Button className="button1">Post a Gig</Button>
                <Button className="button2">Login</Button>
            </div>
        </div>
    )
}

export default Header

import React from 'react'
import "./Header.scss";
import { Button } from 'react-bootstrap';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <a href="https://www.lenzgig.com/news"> <img src="	https://www.lenzgig.com/static/static/img/header-logo.png" alt="" /></a>
                <div className="text">
                   <a href="https://www.lenzgig.com/blogs"><h3>Blog</h3></a>
                    <a href= "https://www.lenzgig.com/news"><h3 style={{marginLeft:"20px"}}>News</h3></a> 
                    <a href="https://www.lenzgig.com/creators"><h3 style={{marginLeft:"20px"}}>Become a Creator</h3></a>
                </div>
            </div>
            <div className="button">
                <a href="https://www.lenzgig.com/signup?referralPageUrl=/post-gig" className="button1">Post a Gig</a>
                <a href="https://www.lenzgig.com/signin" className="button2">Login</a>
            </div>
        </div>
    )
}

export default Header

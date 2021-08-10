import React from 'react';
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import "./Last_Section.scss";
function LastSection() {
    return (
        <div className="section">
            <div className="section__body">
               <a  style={{color:"white",marginTop:"20px"}} href="https://www.lenzgig.com/news"> <img src="	https://www.lenzgig.com/static/static/img/header-logo.png" alt="" /></a>
                <div  style={{marginTop:"10px"}} className="section__col__first">
                    <h3>LenzGig</h3>
                    <a style={{color:"white"}} href="https://www.lenzgig.com/blogs/about-lenzgig">About</a>
                    <a  style={{color:"white"}} href="https://www.lenzgig.com/support">FAQ</a>
                    <a  style={{color:"white"}} href="https://www.lenzgig.com/signin">Login</a>
                    <a  style={{color:"white"}} href="https://www.notion.so/LenzGig-Press-kit-fcea7a595e874c9b8d66b65ba6416bb3">Press</a>
                </div>
                <div className="section__col__second">
                    <h3>Community</h3>
                    <a  style={{color:"white"}} href="https://www.lenzgig.com/blogs">Blog</a>
                    <a  style={{color:"white"}} href="https://www.lenzgig.com/contact-us">Contact Us</a>
                    <a  style={{color:"white"}} href="https://www.lenzgig.com/creators">Become a Creator</a>
                </div>
                <div  style={{marginTop:"20px"}} className="section__col__third">
                    <h3>Social</h3>
                   <a href="https://www.instagram.com/lenz.gig/"> <img src="https://www.lenzgig.com/static/static/v2/footerig.png" alt=" " /></a>
                    <a href="https://www.facebook.com/LenzGig/"><img src="https://www.lenzgig.com/static/static/v2/footerfacebook.png" alt=" " /></a>
                    <a href= "https://twitter.com/LenzGig/"><img src="	https://www.lenzgig.com/static/static/v2/footertwitter.png" alt=" " /></a>
                    <a href="https://www.linkedin.com/LenzGig/?_l=en_US"><img src="	https://www.lenzgig.com/static/static/v2/footerlinkedin.png" alt=" " /></a>
                </div>
                <div style={{marginTop:"20px"}} className="section__col__fourth">
                    <b>Are you an AR or 3D<br />creator who builds world<br /> class experiences?</b>
                    <b>Join our Community today!<br/><br/></b>
                    <a   className="button" href="https://www.lenzgig.com/creators">Become a Creator <ArrowRightAltOutlinedIcon  className="arrow"/></a>
                </div>
            </div>
            <div className="section__footer">
                <h3>
                    Copyright © 2021,LenzGig  Inc.<br />
                    <pan>Our</pan> <a style={{color:"white"}} href="https://www.lenzgig.com/terms">Terms and Conditions</a><span> and</span><a  style={{color:"white"}} href="https://www.lenzgig.com/privacy-policy"> Privacy Policy</a>
                </h3>
                <h3 style={{marginTop:"15px"}}>Made  with 💜 in India</h3>
            </div>
        </div>
    )
}

export default LastSection

import React from 'react';
import './Footer.css'
import footerLogo from '../../../images/logo/footerLogo.png'

import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
    return (
        <footer className="container footerSection mb-3">
            <div className="footerContent">

                <div className="footerCircleThree"></div>
                <div className="footerCircleFour"></div>

                <div className="subscriptionArea text-center">
                    
                <div className="footerCircleOne"></div>
                <div className="footerCircleTwo"></div>
                    <h1>Get our Offers in your email</h1>
                    <p>We won't bother you, unless it's important for you</p>
                    <div className="input-group mb-3 p-3">
                        <input type="text" className="form-control" placeholder="Enter Your Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                                <button className="btn getStarted p-2">Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="footerLogo">
                    <img src={footerLogo} alt="" />
                </div>
                <div className="footerNav">
                    <a class="active" href="#home">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>

                <div className="footerSocialIcons text-center my-3">
                    <span className="facebook"> <TiSocialFacebook /> </span>
                    <span className="twitter"> <TiSocialTwitter /> </span>
                    <span className="linkedIn"> <TiSocialLinkedin /> </span>
                </div>

                <div className="copyRightMark">
                    <p className="text-center">&copy; All rights reserved Mahmudul Islam</p>
                </div>
            </div>

            <div class="box2"></div>
        </footer>
    );
};

export default Footer;
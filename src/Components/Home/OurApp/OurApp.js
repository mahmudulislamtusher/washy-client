import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import './OurApp.css'
import mobileApp from '../../../images/mobileApp.png'

const OurApp = () => {
    return (
        <section className="ourApp">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-7">
                    <h1 className="siteTitle">
                        Download Our App
                    </h1>
                    <p className="my-4 appDescription">
                        Commerce through prospective manufactured products. Intrinsically myocardinate team building methodologies rather than proactive vortals. Credibly deploy accurate infrastructures and B2B synergy.Competently faster multidisciplinary.
                    </p>
                    <div className="appStoreButton">
                        <button className="btn googlePlay">
                            <span> <FaGooglePlay /> </span>
                             Download Now 
                        </button>

                        <button className="btn appleStore">
                            <span> <FaApple /> </span>
                             Download Now 
                        </button>

                    </div>
                </div>
                <div className="col-md-5">
                    <div className="appCircle"></div>

                    <div className="mobileApp">
                        <img src={mobileApp} alt=""/>
                        <h4 className="my-2">Welcome to Washy</h4>
                        <p>
                            Monotonically leverage other's customer directed vortals without process-centric
                        </p>
                        <button className="btn getStarted w-100">Get Started</button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurApp;
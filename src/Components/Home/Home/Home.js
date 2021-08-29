import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import Navbar from '../Header/Navbar/Navbar';
import OurApp from '../OurApp/OurApp';
import ReviewArea from '../ReviewArea/ReviewArea';
import SatisfiedClient from '../SatisfiedClient/SatisfiedClient';
import ServiceArea from '../ServiceArea/ServiceArea';
import WorkingProcess from '../WorkingProcess/WorkingProcess';
import './Home.css'

const Home = () => {
    return (
        <>
            <div className="header-bg">
                <div className="container">
                    <Navbar></Navbar>
                    <Header/>
                </div>
            </div>

            <div className="">
                <WorkingProcess/>
            </div>

            <div className="">
                <OurApp/>
            </div>

            <div className="container">
                <ServiceArea></ServiceArea>
            </div>

            <div className="container">
                <ReviewArea></ReviewArea>
            </div>

            <div className="container">
                <SatisfiedClient/>
            </div>

            <div className="">
                <Contact/>
            </div>
            
            <div className="">
                <Footer/>
            </div>
        </>
    );
};

export default Home;
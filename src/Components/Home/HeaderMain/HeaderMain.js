import React from 'react';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <div className="container headerMain">
               <div className="circleOne"></div>
               <div className="circleTwo"></div>
               <div className="col-md-6 headerText">
                    <h1 className="siteTitle">
                        On-Demand Car Wash. <br/> Delivered
                    </h1>
                    <h4 className="siteDescription my-4">
                        Professionally streamline superior relationship and front-end superior.
                        Continually Fabricate wireless experience with cooperative core competencies. experiences
                    </h4>
                    <button className="btn getApp">
                        Get the app
                    </button>
               </div>
        </div>
    );
};

export default HeaderMain;
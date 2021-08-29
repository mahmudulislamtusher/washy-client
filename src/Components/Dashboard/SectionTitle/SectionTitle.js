import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import './SectionTitle.css'

const SectionTitle = ({title}) => {
    const [loggedInUser] = useContext(UserContext)
    return (
        <div>
            <div className="dashboardTitle pt-5 pb-4 pl-4">
                <div className="title"><h3>{title}</h3></div>
                {
                    loggedInUser.email ? <div className="username text-right">  
                    <img src={loggedInUser.photo} alt=""/>
                    {loggedInUser.name}
                    </div> : ''
                }
            </div>
        </div>
    );
};

export default SectionTitle;
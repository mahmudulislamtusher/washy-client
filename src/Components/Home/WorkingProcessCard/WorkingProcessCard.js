import React from 'react';
import './WorkingProcessCard.css'

const WorkingProcessCard = ({workingProcess}) => {
    return (
            <div className="col-md-4">
                <div className="workStyle text-center">
                    <img src={workingProcess.img} alt="" className="workingProcessImage"/>
                    <h4 className="my-3">{workingProcess.name}</h4>
                    <p className="description">
                        {workingProcess.description}
                    </p>
                </div>
            </div>
    );
};

export default WorkingProcessCard;
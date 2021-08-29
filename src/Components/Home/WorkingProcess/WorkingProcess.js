import React from 'react';
import './WorkingProcess.css'

import tellUs from '../../../images/workingProcess/tellUs.png'
import pickingTime from '../../../images/workingProcess/pickingTime.png'
import handleIt from '../../../images/workingProcess/handleIt.png'
import WorkingProcessCard from '../WorkingProcessCard/WorkingProcessCard';

const workingProcessList = [
    {
        img: tellUs,
        name: "Tell us where you are",
        description: "We reply on smoke signals, astrolabe and occasionally Google Maps to find your car."
    },
    {
        img: pickingTime,
        name: "Pick the time",
        description: "Request for now or pick the time that work best for you, as long as it is within hour."
    },
    {
        img: handleIt,
        name: "Let us handle it",
        description: "Once complete, we will let you know of all the shiny things we've done to your car."
    }
]

const WorkingProcess = () => {
    return (
        <section className="workingProcess mb-3">
            <div className="row">
                {
                    workingProcessList.map(workingProcess => <WorkingProcessCard
                        workingProcess={workingProcess}
                    />)
                }
            </div>
        </section>
    );
};

export default WorkingProcess;

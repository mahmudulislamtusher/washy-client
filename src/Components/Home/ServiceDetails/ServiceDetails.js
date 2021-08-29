import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css'
import { useSpring, animated } from 'react-spring'



const ServiceDetails = ({ service }) => {
    const [state, toggle] = useState(true)
    const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } })

    return (
        
        <div className="col-md-6 col-lg-4">
            <Link style={{ textDecoration: 'none', color: 'black' }} to={"/dashboard/order/" + service.title}>
                <div className="card singleServiceCard text-center">
                    <div onMouseEnter={() => toggle(!state)} onMouseOver={() => toggle(!state)}>
                        <animated.div
                            style={{
                                opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                                transform: x
                                    .interpolate({
                                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                                    })
                                    .interpolate(x => `scale(${x})`)
                            }}><img className="card-img service-card-img" src={`data:image/png;base64,${service.icon.data}`} alt="" /></animated.div>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{service.title}</h5>
                        <p className="card-text">{service.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ServiceDetails;
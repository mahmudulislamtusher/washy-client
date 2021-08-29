import React from 'react';
import CountUp from 'react-countup';
import './SatisfiedClient.css';

const SatisfiedClient = () => {
    return (
        <section className="container satisfiedClient my-3">
            <div className="topSide">
                <div className="text-center">
                    <h1>Some Numbers</h1>
                    <p className="pb-5">
                        Energetically frow go forward sources after fully researched quality vectors.
                        <br />
                        Continually architect e-business relationship.
                    </p>
                    <div className="numberCounter d-flex justify-content-center">
                        <div className="carWashed">
                            <h4>
                                <CountUp
                                    className="account-balance"
                                    start={1000}
                                    end={15940}
                                    duration={10}
                                    useEasing={true}
                                    useGrouping={true}
                                />
                            </h4>
                            <p className="mt-2">Cars Washed</p>
                        </div>
                        <div className="waterSaved">
                            <h4>
                                <CountUp
                                    className="account-balance"
                                    start={1000}
                                    end={95620}
                                    duration={10}
                                    useEasing={true}
                                    useGrouping={true}
                                />
                            </h4>
                            <p className="mt-2">Gallons of Water Saved</p>
                        </div>
                        <div className="happyCustomer">
                            <h4>
                            <CountUp
                                    className="account-balance"
                                    start={1000}
                                    end={5782}
                                    duration={10}
                                    useEasing={true}
                                    useGrouping={true}
                                />
                            </h4>
                            <p>Happy Customer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottomSide">
                <p> *Appropriately leverage others client-centered.</p>
            </div>
        </section>
    );
};

export default SatisfiedClient;
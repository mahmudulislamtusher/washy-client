import React, { useContext, useRef} from 'react';
import {  useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import SectionTitle from '../SectionTitle/SectionTitle';
import Sidebar from '../Sidebar/Sidebar';

const Order = () => {
    document.title="New Order"
    const currentForm = useRef(null)

    const { serviceName } = useParams()
    const [loggedInUser] = useContext(UserContext)


    const handleSubmit = (e) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const serviceName = document.getElementById('serviceName').value;
        const details = document.getElementById('details').value;
        const budget = document.getElementById('budget').value;
        const status = 'Pending'

        const newOrder = { name, email, serviceName, details, budget, status }
        fetch('https://afternoon-sands-85438.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                currentForm.current.reset()
                console.log(data)
            })

        e.preventDefault()
    }

    return (
        <section>
            <div className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <SectionTitle title={"Order a Service"}></SectionTitle>
                    <div className="addServiceForm" style={{ backgroundColor: '#F4F7FC', padding: '30px', height: '80vh' }}>
                        <div className="row">
                            <div className="col-md-6">
                                <form ref={currentForm} onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input type="text" name="name" id="name" defaultValue={loggedInUser.name} className="form-control" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" id="email" defaultValue={loggedInUser.email} className="form-control" placeholder="Your Email Address" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="serviceName" id="serviceName" defaultValue={serviceName} className="form-control" placeholder="Service Name" />
                                    </div>
                                    <div className="form-group">
                                        <textarea rows="6" className="form-control" name="details" id="details" placeholder="Project Details"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="budget" id="budget" className="form-control" placeholder="Budget" />
                                    </div>
                                    <button type="submit" className="btn brand-btn">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;
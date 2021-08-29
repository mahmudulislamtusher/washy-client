import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import orderImg from '../../../images/icons/service1.png'
import SectionTitle from '../SectionTitle/SectionTitle';
import Sidebar from '../Sidebar/Sidebar';
import './UserOrderHistory.css'

const UserOrderHistory = () => {
    document.title = "Dashboard"
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://afternoon-sands-85438.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const checkOrder = orders.filter(order => order.email === loggedInUser.email)
    
    return (
        <section>
            <div className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-10">
                    <SectionTitle title={"Service List"}></SectionTitle>
                    <div className="card-deck py-5 row" style={{ backgroundColor: '#F4F7FC', padding: '30px', height: 'auto' }}>
                        {
                            checkOrder.length > 0 ? checkOrder.map(order => <SingleOrder key={order._id} order={order}></SingleOrder>) : <h3>Sorry, no orders available</h3>
                        }
                    </div>
                </div>


            </div>
        </section>

    );
};


const SingleOrder = (props) => {
    const { serviceName, details, status } = props.order;
    const checkAdmin = props.checkAdmin;

    return (

        <div className="col-md-5 singleCard m-3" style={{ backgroundColor: 'white', borderRadius: '10px', padding: '0px', }}>
            <div className="card card-body orderCard py-3" style={{ border: 'none' }}>
                <div className="orderIdentity py-3 d-flex justify-content-space-between align-items-center">
                    <img className="card-img service-img mr-3" style={{ width: '75px' }} src={orderImg} alt="" />
                    <div>{status}</div>
                </div>
                <div className="info">
                    <h4>{serviceName}</h4>
                    <p className="text-secondary">{details}</p>
                </div>
            </div>
        </div>
    )
}

export default UserOrderHistory;

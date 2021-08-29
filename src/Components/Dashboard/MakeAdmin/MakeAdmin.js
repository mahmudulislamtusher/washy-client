import React, { useRef } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const currentForm = useRef(null)
    const handleSubmit = (e) => { 
        document.title = "Make Admin"
        const email = document.getElementById('email').value;
        
        const newAdmin = {email}
        fetch('https://afternoon-sands-85438.herokuapp.com/admins', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newAdmin)
        })
        .then(res => res.json())
        .then (data => {
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
                    <SectionTitle title={"Make Admin"}></SectionTitle>
                    <div className="addServiceForm" style={{ backgroundColor: '#F4F7FC', padding: '30px', height: '80vh' }}>
                        <div className="formSection" style={{ backgroundColor: 'white', borderRadius: '20px', padding: '30px' }}>
                            <form ref={currentForm} onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" name="email" id="email" className="form-control" placeholder="Enter Email" />
                                </div>
                                <button className="btn brand-btn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;
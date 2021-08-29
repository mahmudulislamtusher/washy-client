import React, { useContext, useRef} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../../App';
import SectionTitle from '../SectionTitle/SectionTitle';

const Review = () => {
    document.title = "Write Review"
    const currentForm = useRef(null)
    const [loggedInUser] = useContext(UserContext)
    const handleSubmit = (e) => { 
        const img = loggedInUser.photo;
        const name = document.getElementById('name').value;
        const company = document.getElementById('company').value;
        const review = document.getElementById('review').value;
        
        const newReview = {name, company, review, img}
        fetch('https://afternoon-sands-85438.herokuapp.com/reviews', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newReview)
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
                    <SectionTitle title={"Review"}></SectionTitle>
                    <div className="addServiceForm" style={{ backgroundColor: '#F4F7FC', padding: '30px', height: '80vh' }}>
                        <div className="formSection" style={{ backgroundColor: 'white', borderRadius: '20px', padding: '30px' }}>
                            <form ref={currentForm} onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Name</label>
                                    <input type="text" name="name" id="name" className="form-control" placeholder="Enter Name" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Company</label>
                                    <input type="text" name="company" id="company" className="form-control" placeholder="Enter Company" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Review</label>
                                    <textarea className="form-control" name="review" id="review" placeholder="Write Review"></textarea>
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

export default Review;
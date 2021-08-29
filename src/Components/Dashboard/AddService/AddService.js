import React, { useRef, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const currentForm = useRef(null)
    const [service, setService] = useState({})
    const [icon, setIcon] = useState(null)
    const handleBlur = e => {
        const newService = {...service}
        newService[e.target.name] = e.target.value;
        setService(newService)
    }
    const handleIconChange = (e) => {
        const newIcon = e.target.files[0]
        setIcon(newIcon)
    }
    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('icon', icon)
        formData.append('title', service.title)
        formData.append('description', service.description)

        fetch('https://afternoon-sands-85438.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            currentForm.current.reset()
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
        e.preventDefault()
    }
    document.title = "Add Service"
    return (
        <section>
            <div className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <SectionTitle title={"Add a Service"}></SectionTitle>
                    <div className="addServiceForm" style={{ backgroundColor: '#F4F7FC', padding: '30px', height: '80vh' }}>
                        <div className="formSection" style={{ backgroundColor: 'white', borderRadius: '20px', padding: '30px' }}>
                            <form ref={currentForm} onSubmit = {handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Service Title</label>
                                    <input onBlur={handleBlur} type="text" name="title" className="form-control" placeholder="Enter Title" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Description</label>
                                    <textarea onBlur={handleBlur} className="form-control" name="description" placeholder="Enter Description"></textarea>
                                </div>
                                <div className="form-group">
                                    <input onChange={handleIconChange} type="file" placeholder="Attach Icon" name="icon"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddService;
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1 className="brand-text text-center">Sorry, nothing is here.</h1>
            <Link to="/"><button>Home</button></Link>
        </div>
    );
};

export default Error;
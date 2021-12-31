import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img src='https://image.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg' alt=''/>
            <NavLink to='/'>
                <br/>
            <button className='btn-info rounded'>Home</button>
            </NavLink>
        </div>
    );
};

export default NotFound;
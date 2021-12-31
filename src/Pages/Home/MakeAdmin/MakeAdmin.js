import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const users = { email };
        fetch('https://immense-crag-91398.herokuapp.com/user/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                    alert('Admin added')
                    success()
                    
                }
            })

        e.preventDefault()
    }

    return (
        <div>
        <h2>Make an Admin</h2>
        <form onSubmit={handleAdminSubmit}>
           <input 
            type='email'
            placeholder='Enter email'
             onBlur={handleOnBlur}></input>
           <button type='submit'>Make Admin</button>
        </form>
    </div>
    );
};

export default MakeAdmin;
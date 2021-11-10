import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Container, Form, Spinner } from 'react-bootstrap';
import { Link , useHistory, useLocation} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { user, signIn, authError, loading, googleSignIn } = useAuth()
    const [loginData,setLoginData] = useState({})

    const location = useLocation()
    const history = useHistory()

    const handleOnBlur = e => {
        const feild = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[feild] = value
        setLoginData(newLoginData)

    }
    const handleSubmit = e => {
        signIn(loginData?.email, loginData?.password, location, history)
        e.preventDefault()
    }

    return (
        <Container className='my-5'>
            <h4>Login</h4>
            <Form onSubmit={handleSubmit} className='my-4'>
                <Form.Group className="mb-3 w-25 mx-auto" controlId="formGroupEmail">
                    <Form.Control
                    name='email'
                    onBlur={handleOnBlur}
                     type="email"
                      placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3 w-25 mx-auto" controlId="formGroupPassword">
                    <Form.Control 
                    type="password"
                    name='password'
                    onBlur={handleOnBlur}
                     placeholder="Password" />
                </Form.Group>
                <Button type="submit" className='btn-info'>Submit</Button>
                <p>New to here?? <Link to='/register'>Register</Link></p>
            </Form>
            {loading && <Spinner animation="border" />}

        </Container>
    );
};

export default Login;
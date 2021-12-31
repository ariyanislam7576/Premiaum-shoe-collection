import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useParams } from 'react-router';

const PlaceOrder = () => {

    const {user} = useAuth()
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const { register, handleSubmit, reset, } = useForm();
    useEffect(() => {
        fetch(`https://immense-crag-91398.herokuapp.com/addproduct/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [id])
    const onSubmit = data => {
        axios.post('https://immense-crag-91398.herokuapp.com/myorder',data)
         .then(res => {
        if(res.data){
            alert('Order placed')
            reset()
        }
    })
    }
    return (
        <div className='container my-5'>
            <Row xs={1} md={3} className="g-4 text-center">
                <Col>
                    <Card>
                        <img src={product.img} alt="" />
                        <Card.Body className="text-start">
                            <Card.Title>{product.name}</Card.Title>
                            <h3>${product.price}</h3>
                            <Card.Text>
                                {product.description?.slice(0,200)}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <form className='my-5' onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user?.displayName} {...register("name", { required: true, maxLength: 60 })} placeholder='name' />
                 <br /> <br />
                <input type="email" defaultValue={user?.email} {...register("email" ,{required: true})} placeholder='email' /> 
                <br /> <br />
                <input defaultValue={product.name} {...register("product" ,{required: true})} placeholder='Destination name' /> 
                <br /> <br />
                <input  {...register("address", { required: true, maxLength: 40 })} placeholder='address' />
                 <br /> <br />
                <input type="number" {...register("phone")} placeholder='Phone' /> 
                <br /> <br />
                <textarea {...register("description", { required: false, maxLength: 2000 })} placeholder='description' /> <br /> <br />
                <input type="submit" value="procced to booking" />
            </form>
            </Row>
        </div>
    );
};

export default PlaceOrder;
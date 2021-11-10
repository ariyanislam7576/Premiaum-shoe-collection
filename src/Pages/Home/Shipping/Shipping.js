import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Shipping = () => {
    return (
        <div>
            <Row>
                <div className='col-md-4'>
                    <img className='w-100' src='https://image.freepik.com/free-vector/loading-workman-carrying-boxes_74855-14096.jpg'/>
                    <h5>free shipping</h5>
                </div>
                <div className='col-md-4'>
                <img className='w-100' src='https://image.freepik.com/free-vector/sale-label-collection_52683-5806.jpg'/>
                    <h5>get Discount</h5>
                </div>
                <div className='col-md-4'>
                    <img className='w-100' src='https://image.freepik.com/free-vector/way-concept-illustration_114360-1191.jpg'/>
                    <h5>happy returns</h5>
                </div>
            </Row>
        </div>
    );
};

export default Shipping;
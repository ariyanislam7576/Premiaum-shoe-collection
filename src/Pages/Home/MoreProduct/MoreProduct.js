import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MoreProduct = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://immense-crag-91398.herokuapp.com/addproduct')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])

    return (
        <Container className='my-5'>
            <Row xs={1} md={3} className="g-4">
              {
                  product.map(p =>
                   <Col key={p._id}>
                    <Card className='text-start'>
                      <Card.Img variant="top" src={p.img} />
                      <Card.Body>
                        <Card.Title>{p.name}</Card.Title>
                        <h5>Price: ${p.price}</h5>
                        <Card.Text>
                          {p.description.slice(0,50)}
                        </Card.Text>
                        <NavLink to={`/placeorder/${p._id}`}>
                        <button className='btn-info rounded px-2 fw-800'>Bay now</button>
                        </NavLink>
                      </Card.Body>
                    </Card>
                  </Col>)
              }
            </Row>
        </Container>
    );
};

export default MoreProduct;
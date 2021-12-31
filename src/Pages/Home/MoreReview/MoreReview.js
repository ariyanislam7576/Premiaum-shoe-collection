import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const MoreReview = () => {
  const [review, setReview] = useState([])
  useEffect(() => {
    fetch('https://immense-crag-91398.herokuapp.com/addreview')
      .then(res => res.json())
      .then(data => {
        setReview(data)
      })
  }, [])
  return (
    <Container className='my-5'>
      <Row xs={1} md={3} className="g-4">
        {
          review.map(r =>
            <Col key={r._id}>
              <Card className='text-start'>
                <Card.Body>
                  <Card.Text>
                    {r.review.slice(0, 100)}
                  </Card.Text>
                  <Card.Title>{r.name}</Card.Title>
                </Card.Body>
                <Box>
                  <Rating name="read-only" value={r.rating} readOnly />
                </Box>
              </Card>
            </Col>)
        }
      </Row>
    </Container>
  );
};

export default MoreReview;
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Review from './Review/Review';



const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('https://immense-crag-91398.herokuapp.com/addreview')
        .then(res => res.json())
        .then(data => {
           setReviews(data)
        })
    },[])
    return (
        <Container className='my-3'>
            <h3>Customar Reviews</h3>
            <Row xs={1} md={3} className="g-4">
                    {
                        reviews.slice(0,3).map(r => <Review
                        key={r._id}
                        r={r}
                        ></Review>)
                    }
            </Row>
            <NavLink to='morereview'>More reviews</NavLink>
        </Container>
    );
};

export default Reviews;
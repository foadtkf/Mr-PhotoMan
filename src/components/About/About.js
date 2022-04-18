import React from 'react';
import { Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Row xs={1} md={2}>
    <Col><img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" srcset="" /></Col>
    <Col className='p-5'>
            <h1>About Me</h1>
        <h3>Name: MD Fakhrul Islam Fuad</h3>
        <h5>ID: 180201067</h5>
        <h5>Level: 4 || Term: I</h5>
        <h5>Bangladesh Army University of Science & Technology, Saidpur.</h5>
    </Col>
  </Row>
        </div>
    );
};

export default About;
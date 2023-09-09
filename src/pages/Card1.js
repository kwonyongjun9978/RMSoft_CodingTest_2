import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image3 from '../Images/youtube.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card1 = () => {
    return (
        <Card style={{ width: '18rem', marginRight: '80px'}}>
            <Card.Img variant="top" src={image3} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
    );
};

export default Card1;
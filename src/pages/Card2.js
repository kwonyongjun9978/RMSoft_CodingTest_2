import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image4 from '../Images/BitMarket.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card2 = () => {
    return (
        <Card style={{ width: '18rem', marginLeft: '80px'}}>
            <Card.Img variant="top" src={image4} />
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

export default Card2;
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image3 from '../Images/youtube.png';


const Card1 = () => {
    return (
        <Card style={{ width: '18rem', marginRight: '80px'}}>
            <Card.Img variant="top" src={image3} style={{height: '200px'}} />
            <Card.Body style={{display:'flex', justifyContent:'center'}}>
                <Button variant="danger" style={{fontWeight:'bold'}}>YouTube(Clone)</Button>
            </Card.Body>
        </Card>
    );
};

export default Card1;
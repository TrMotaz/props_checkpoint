import React from 'react'
import {Card,Button} from 'react-bootstrap';
function Profile(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.x.image}/>
  <Card.Body>
    <Card.Title> {props.x.name} </Card.Title>
    <Card.Text>
    {props.x.description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Profile

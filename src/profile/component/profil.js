import React from 'react'
import PropTypes from'prop-types';
import { getAllByTestId } from '@testing-library/react';
import {Card,Button} from "react-bootstrap"
function Profil(props) {
    return (<div>
        {/* <img style={{height:380,width:350,marginTop:40}} src="/images/aymen.jpg" alt="aymen"/>
        <h1>Name: {props.name}</h1>
        <h3>Bio: {props.bio}</h3>
    <h3>Profession: {props.profession}</h3> */}
    <Card>
  <Card.Header>Card</Card.Header>
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <img style={{height:380,width:350,marginTop:40}} src="images/aymen.jpg"/>
    <Card.Text>
    {props.bio}
    {props.profession}
    </Card.Text>
     <Button variant="primary" onClick={()=>handleName(props)}>Hello</Button> 
  </Card.Body>
</Card>
    </div>
    )
}

Profil.prototype={
    name: PropTypes.string,
    bio: PropTypes.number.isRequired,
    profession: PropTypes.number.isRequired,
}
const handleName = (props) => {
    alert(`Hello I am ${props.name}`);
  };
Profil.defaultProps ={}

export default Profil;
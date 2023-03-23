import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useContext, useState } from "react";

import AppProvider, { UserContext } from './Appprovider';
import BaseApp from './components/base';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import { useHistory } from "react-router-dom";




export default function Teachers() {
    const history = useHistory();
    const [user, setUser] = useContext(UserContext);
   
    const deleteUser = (idx)=>{
        const alterList = user.filter((per)=>per.id !== idx);
         setUser(alterList)
       }
    
    
    return (
        <BaseApp>
<Container className='jusify-content-centre mt-2'>

<h2>ALL TEACHER DETAILS</h2>
   </Container>
            <Container fluid id="teachercontainer">
                <Row className="justify-content-center">

                    {user.map((user,index) => (
                        <Col lg={6} sm={12} md={6}>
                            <Card id="card" >
                                <Card.Header><h1>Teacher : {user.name}</h1></Card.Header>
                                <Card.Body>
                                <Card.Text>
                                    <h4>Subject: {user.subject}</h4>
                                    <h5>Class: {user.class}</h5>
                                    <h6>Experience: {user.experience}</h6>

                                </Card.Text>
                                <Button
                                className=""
                                variant='info'
                                onClick={()=>history.push(`/editteacher/${index}`)} 
                                >Edit</Button>
                                <Button
                                className="m-2"
                                variant='secondary'
                                onClick={()=>history.push(`/teacher/${index}`)}    
                                >View</Button>
                                <Button
                                variant="danger"
                                onClick={()=>deleteUser(user.id)}
                                >Delete</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                    ))}



                </Row>



            </Container>




        </BaseApp>

    );



}

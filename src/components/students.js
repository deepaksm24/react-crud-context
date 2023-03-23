import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useContext, useState } from "react";

import BaseApp from '../components/base';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../Appprovider';
import { useHistory } from "react-router-dom";





export default function Students() {

    const history = useHistory();

    const [user, setUser,student,setStudent] = useContext(UserContext);
   
    const deleteUser = (idx)=>{
        const alterList = student.filter((per)=>per.id !== idx);
         setStudent(alterList)
       }
    
    console.log(student);
    
    return (
        <BaseApp>


        
<Container className='jusify-content-centre mt-2'>

<h2>All Student DETAILS</h2>
   </Container>
            <Container fluid id="teachercontainer">
                <Row className="justify-content-center">

                    {student.map((student,index) => (
                        <Col lg={6} sm={12} md={6}>
                            <Card id="card" >
                                <Card.Header><h1>Student Name: {student.name}</h1></Card.Header>
                                <Card.Body>
                                <Card.Text>
                                    <h4>Class: {student.class}</h4>
                                    <h5>Grade: {student.Grade}</h5>
                                </Card.Text>
                                <Button
                                className=""
                                variant='info'
                                onClick={()=>history.push(`/editstudent/${index}`)} 
                                >Edit</Button>
                                <Button
                                className="m-2"
                                variant='secondary'
                                onClick={()=>history.push(`/student/${index}`)} 
                                >View</Button>
                                <Button
                                variant="danger"
                                onClick={()=>deleteUser(student.id)}
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

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import BaseApp from '../components/base';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Studentdetail } from './studentdetail';


function Studentview() {
    const { id } = useParams();
    const student = Studentdetail[id];


    return (

        <BaseApp>
<Container className='jusify-content-centre mt-2'>

<h2>STUDENT DETAIL VIEW</h2>
   </Container>
            <Container id="teachercontainer">
                <Row className="justify-content-center mt-5 p-3">


                    <Col>
                        <Card id="card" >
                            <Card.Header><h1>Student Name: {student.name}</h1></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <h4>Class: {student.class}</h4>
                                    <h5>Grade: {student.Grade}</h5>
                                </Card.Text>

                            </Card.Body>
                        </Card>

                    </Col>




                </Row>



            </Container>


        </BaseApp>



    )
}

export default Studentview
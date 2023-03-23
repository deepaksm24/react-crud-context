import React, { useContext, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../Appprovider';
import BaseApp from './base'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import { Studentdetail } from './studentdetail';
import { Student1 } from './TeacherDetails';



export default function Teacheredit() {



    const [user, setUser] = useContext(UserContext);

    const history = useHistory();

    const { id } = useParams();

    const selectedUser = Student1[id];


    const [name, setName] = useState(selectedUser.name);
    const [experience, setExperience] = useState(selectedUser.experience);
    const [subject, setSubject] = useState(selectedUser.subject);
    const [classn, setClassn] = useState(selectedUser.class);


    const updateUser = () => {
        const uppUser = {
            id,
            name,
            class: classn,
            experience,
            subject
        }

        Student1[id] = uppUser;

        setUser([...Student1]);
        history.push("/teachers")
    }

    return (
        <BaseApp>
<Container className='jusify-content-centre mt-2'>

<h2>EDIT TEACHER DETAILS</h2>
   </Container>
            <Container className='mt-5 p-2'>
                <Card>
                    <div>
                        <h1>ID: {selectedUser.id}</h1>
                        <br />

                        <br />
                        Name: <input
                            className='m-3 p-2'
                            placeholder="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <br />
                        Subject:<input
                            className='m-2 p-2'
                            placeholder="Subject"
                            value={subject}
                            onChange={(event) => setSubject(event.target.value)}
                        />
                        <br />
                        Exp:<input
                            className='m-3 p-2'
                            placeholder="experience"
                            value={experience}
                            onChange={(event) => setExperience(event.target.value)}
                        />
                        <br />
                        Class: <input
                            className='m-3 p-2'
                            placeholder="class"
                            value={classn}
                            onChange={(event) => setClassn(event.target.value)}
                        />
                        <br />
                        <Button
                            className='m-3 p-2'
                            variant='success'
                            onClick={updateUser}
                        >Update
                        </Button>

                    </div>

                </Card>

            </Container>

        </BaseApp>
    )
}

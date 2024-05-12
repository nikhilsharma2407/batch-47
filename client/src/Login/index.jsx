import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import './styles.scss'
import axiosInstance, { ENDPOINTS } from '../apiUtil';

function Login() {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const isValid = username && password;

    const login = async () => {
        try {
            const payload = { username, password }
            const { data: response } = await axiosInstance.post(ENDPOINTS.USER.LOGIN, payload);
            console.log("🚀 ~ login ~ data:", response.data);
            alert(response.message);
        } catch (error) {
            const errData = error.response?.data
            // console.log("🚀 ~ login ~ error:", error.response.data);
            alert(errData.message)
        }
    }

    return (
        <Container fluid>
            <Row>
                <Col lg={{ span: 4, offset: 4 }} md={{ span: 6, offset: 3 }} sm={{ span: 10, offset: 1 }}>
                    <Card className='mt-5 login'>
                        <Card.Body>
                            <FormGroup className='mb-3'>
                                <FormLabel>username</FormLabel>
                                <FormControl placeholder='Enter username' onChange={e => setUsername(e.target.value)} />
                            </FormGroup>
                            <FormGroup className='mb-3'>
                                <FormLabel>password</FormLabel>
                                <FormControl placeholder='Enter password' type='password' onChange={e => setPassword(e.target.value)} />
                            </FormGroup>
                            <FormGroup className='mb-3'>
                                <Button onClick={login} disabled={!isValid} variant='outline-primary'>Login</Button>
                            </FormGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login

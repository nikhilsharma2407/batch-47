import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import './styles.scss'
import axiosInstance, { ENDPOINTS, REQUEST_TYPES } from '../apiUtil';
import useApi from '../useApi';
import { UserContext } from '../UserContextProvider';
import { useLocation, useNavigate } from 'react-router';

function Login() {
    const { makeRequest, message, error, isLoading } = useApi(ENDPOINTS.USER.LOGIN, REQUEST_TYPES.POST);
    const { makeRequest: resetPassword, response, setResponse } = useApi(ENDPOINTS.USER.RESET_PASSWORD, REQUEST_TYPES.PATCH, { updateUserdata: false });

    const { userData } = useContext(UserContext);


    const { state } = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        if (userData && state?.redirectionURL) {
            navigate(state.redirectionURL, { replace: true })
        }
    }, [userData, state])


    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const [showResetForm, setShowResetForm] = useState(false);
    const [otp, setOtp] = useState(null)

    const isValid = username && password;

    useEffect(() => {
        console.log("🚀 ~ Login ~ response:", response)
        if (showResetForm && response?.message === "Password reset successfully" && !error) {
            setShowResetForm(false);
            setResponse(null);
        }
    }, [response, showResetForm])

    const login = () => {
        const payload = { username, password }
        makeRequest(payload)

        // try {
        //     const payload = { username, password }
        //     // const { data: response } = await axiosInstance.post(ENDPOINTS.USER.LOGIN, payload);
        //     // console.log("🚀 ~ login ~ data:", response.data);
        //     // alert(response.message);
        // } catch (error) {
        //     const errData = error.response?.data
        //     // console.log("🚀 ~ login ~ error:", error.response.data);
        //     alert(errData.message)
        // }
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
                                {/* <Button onClick={login} disabled={!isValid} variant='outline-primary'>Login</Button> */}
                                {
                                    showResetForm ?
                                        <>
                                            <Form.Group className="mb-3" controlId="otp">
                                                <Form.Label>OTP</Form.Label>
                                                <Form.Control type="number" placeholder="Code from Authenticator"
                                                    onChange={e => setOtp(e.target.value)} />
                                            </Form.Group>
                                            <Button
                                                variant="outline-primary"
                                                onClick={() => { resetPassword({ username, password, otp });}}
                                            disabled={!isValid && !otp} >
                                            Reset Password
                                        </Button>
                            </>
                            :
                            <div className='d-flex justify-content-between'>
                                <Button
                                    variant="outline-primary"
                                    onClick={login}
                                    disabled={!isValid} >
                                    Login
                                </Button>

                                <Button
                                    variant="outline-danger"
                                    onClick={() => { setShowResetForm(true); }}>
                                    Forgot Password
                                </Button>
                            </div>
                                }
                        </FormGroup>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </Container >
    )
}

export default Login

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card, Container, Row, Col } from 'react-bootstrap'
import './styles.scss'
import { useEffect, useState } from 'react';

function Signup() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [qrcode, setQrcode] = useState(null);

  const ENTER_KEY_CODE = 13;

  const updateState = (e, fn) => {
    fn(e.target.value);
  }

  const isFormValid = name && username && password;

  const onSignup = () => {
    if (!isFormValid) return;
    console.log('Signup Clicked');
    const payload = { name, username, password }
  }

  const onKeyUp = (e) => {
    // console.log(e);
    if (e.keyCode === ENTER_KEY_CODE) {
      console.log('Enter key pressed');
      onSignup()
      // trigger submit
    }
  }

  return (
    <Container fluid>
      <Row>
        <Col lg={{ span: 4, offset: 4 }} md={{ span: 6, offset: 3 }} sm={{ span: 10, offset: 1 }}>
          <Card className='mt-5 signup'>
            <Card.Body>
              {qrcode? <>
                <h1>Two Factor Authentication setup</h1>
                <h2>Please scan the QRcode with Google Authenticator</h2>
                <div className='d-flex justify-content-center'>
                  <img src={qrcode} />
                </div>
              </> :
                <Form>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Enter Name" onChange={e => updateState(e, setName)} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="username">
                    <Form.Label>username</Form.Label>
                    <Form.Control placeholder="Enter username" onChange={e => updateState(e, setUsername)} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                      onKeyUp={onKeyUp}
                      onChange={e => updateState(e, setPassword)} />
                  </Form.Group>


                  <Button
                    variant="outline-primary"
                    onClick={onSignup}
                    disabled={!isFormValid} >
                    Signup
                  </Button>
                </Form>
              }

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

// <h1>Two Factor Authentication setup</h1>
// <h2>Please scan the QRcode with Google Authenticator</h2>
// <img src="" alt="" />

export default Signup
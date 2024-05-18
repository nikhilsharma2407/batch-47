import React, { useState } from 'react'
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { incrementActionCreator, decrementActionCreator } from '../reducers/countReducer';

function Counter() {
  // const [count, setCount] = useState(0);
  const [value, setValue] = useState(1)
  const count  = useSelector(state=>state.count);
  const dispatch = useDispatch();

  // const valueFromApi =  Promise.resolve(10);

  const incrementCount = () => {
    dispatch(incrementActionCreator(value));
    // setCount(count => count + 1)
  }
  const decrementCount = () => {
    dispatch(decrementActionCreator(value));
    // setCount(count => count - 1)
  }

  return (
    <Container fluid>
      <Row>
        <Col sm={{ span: 6, offset: 3 }} className='mt-5'>
          <Card >
            <Card.Title>
              Count Reducer
            </Card.Title>
            <Card.Body>
              <div><input type="number" min="1" max="10" onChange={e=>setValue(+e.target.value)} /></div>
              <Button variant='outline-danger' onClick={decrementCount} >-</Button>
              <Badge pill bg="info mx-1">{count}</Badge>
              <Button variant='outline-success' onClick={incrementCount}>+</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Counter
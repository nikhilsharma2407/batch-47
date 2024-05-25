import React, { useContext } from 'react'
import { Badge, Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link, useSearchParams } from 'react-router-dom'
import { UserContext } from './UserContextProvider';
import { Cart } from 'react-bootstrap-icons';
import useApi from './useApi';
import { ENDPOINTS } from './apiUtil';
import "./style.scss"




function MyNavbar() {

  const { userData } = useContext(UserContext);
  console.log("🚀 ~ MyNavbar ~ userData:", userData)
  const totalCount = userData?.totalCount

  const { makeRequest } = useApi(ENDPOINTS.USER.LOGOUT)

  const [, setSearchParams] = useSearchParams();

  return (
    <Navbar expand="md" bg='dark' data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">React Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link as={Link} to="/flex">Flex</Nav.Link>
            <Nav.Link as={Link} to="/bootstrap">Bootstrap</Nav.Link>
            <Nav.Link as={Link} to="/routing">Routing</Nav.Link>
            <Nav.Link as={Link} to="/reducer">Reducer</Nav.Link>
          </Nav>
          <Nav className='d-md-flex align-items-md-center align-items-start'>
            {userData ? <>
              <Cart as={Link} to="/cart" size={25} style={{ color: "rgba(255, 255, 255, 0.55)" }} />
              {totalCount && <Badge className='d-block d-md-flex cart-count' pill bg="primary">{totalCount}</Badge>}
              
              <Nav.Link onClick={makeRequest}>Logout</Nav.Link>

            </> : <>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
            </>}

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={e => setSearchParams({ search: e.target.value.toLowerCase() })}

            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default MyNavbar

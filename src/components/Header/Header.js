import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Container, Nav, Navbar} from 'react-bootstrap';
import auth from "../../firebase.init";
import "./Header.css";
import { Link } from 'react-router-dom';
import logo from '../logo.png'
const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={50} src={logo} alt="" className="rounded-pill"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-decoration-none' style={{color:'gray'}} onClick={handleSignOut}>sign out</button>
                                :
                                <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
  );
};

export default Header;

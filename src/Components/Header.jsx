import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <div className='header head-back-img' >
        <Navbar expand="lg" fixed="top" >
            <Container className='d-flex justify-content-end' >
                <Nav className='mx-2'><button className='btn'>Home</button></Nav>
                <Nav className='mx-2'>About Us</Nav>
                <Nav className='mx-2'>Research</Nav>
                <Nav className='mx-2'>Contact US</Nav>             
            </Container>

        </Navbar>
        <div className='ps-3 py-3'>
            <div className='mt-4'>
                <h5>Quick solutions for all Needs</h5>
                <h5>Your <span className='text-info'>Success</span> is</h5>
                <h5>our <span className='mottto'>Motto</span></h5>
            </div>
        <div>
            <button className='btn btn-dark'>Sign Up</button>
        </div>
        </div>
    </div>
  )
}

export default Header
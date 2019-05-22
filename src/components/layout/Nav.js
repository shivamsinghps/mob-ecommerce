import React from 'react'
import {Navbar,NavDropdown,Nav} from 'react-bootstrap'
import './Nav.css'
import {Link} from 'react-router-dom'
import cartlogo from './cartlogo.svg'


 function NavigationalBar()
 {
   return(
<div id='2'>
<Navbar className='sttyle' collapseOnSelect expand="md" bg="dark" variant="dark">

<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Navbar.Brand className='sttyle'>Mobile Store</Navbar.Brand>
<Nav className="mr-auto">
  <Link to="/"><i className="fas fa-mobile-alt" /></Link>
  <Nav.Link href="#features">Latest News</Nav.Link>
  <Nav.Link href="#pricing">Super Week Deals!</Nav.Link>
  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">Contact Us</NavDropdown.Item>

    <NavDropdown.Divider />
    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  </NavDropdown>
</Nav>
<Nav>
  <Link to="/Cart" ><button className="btn btn-info"><img src={cartlogo} alt='store'  /></button> </Link>


</Nav>
</Navbar.Collapse>
</Navbar>
</div>
)}

export default NavigationalBar

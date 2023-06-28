import './Admin.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';


function Admin() {
  const navigate = useNavigate()
  return (
      <div>
          <Navbar bg="light" variant="light" expand="lg">

              <div className="headeradmin">
                  <Navbar.Brand href="#home"><img className="logo" src="src\assets\logo Nav.png" alt="Logo" />
                      <img className="parcel-logo" src="src\assets\parcel-logo.png" alt="Logo" />
                  </Navbar.Brand>
              </div>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
                  <Nav className="mr-auto">
                      <Nav.Link href="#Home" ><Link className="navlist" to="/">Home</Link></Nav.Link>
                      {/* <Nav.Link href="#About">About</Nav.Link> */}
                      <NavDropdown title="Service" id="basic-nav-dropdown">

                          <NavDropdown.Item href="#View Parcel"><Link className="viewlist" to="/view">View Parcel</Link></NavDropdown.Item>
                          <NavDropdown.Item href="#Search Parcel"><Link className="searchlist" to="/search">Search Parcel</Link></NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="#Logout">Logout</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
    

   {/* <div className="row">

    </div>
    <div className="two column"/>
      <div className="column">
        
      </div>
      <div className="column">
       
      </div>
  </div> */}
  <div className="image">
      <img src=".\src\assets\User-Icon-Grey.png" alt="Admin login" />
      <p className="logo-text">Admin</p>
    <div className="view">
      <button type="button" onClick={() => navigate('/view')}>View Parcel</button>
    </div>
    <div className="search">
    <button type="button" onClick={() => navigate('/search')}>Search User</button>
    </div>
    </div>


    </div>
    
  )
 

}

export default Admin

import './View.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


function View() {
    const navigate = useNavigate()
    return (
        <div> 
            <Navbar bg="light" variant="light" expand="lg">

                <div className="headerv">
                    <Navbar.Brand href="#home"><img className="logov" src="src\assets\logo Nav.png" alt="Logo" />
                    <img className="parcel-logov" src="src\assets\parcel-logo.png" alt="Logo" /> </Navbar.Brand>
                </div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
                    <Nav className="mr-auto">
                    <Nav.Link href="#Home" ><Link  className="homelist" to="/">Home</Link></Nav.Link>
                        {/* <Nav.Link href="#About">About</Nav.Link> */}
                        <NavDropdown title="Service" id="basic-nav-dropdown">

                            <NavDropdown.Item href="#View Parcel">View Parcel</NavDropdown.Item>
                            <NavDropdown.Item href="#Search Parcel"><Link className="searchlist"to="/search">Search Parcel</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#Logout">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="containerv">

                <div className="imagev">
                    <img src=".\src\assets\User-Icon-Grey.png" alt="Admin login" />
                    <p className="logo-textv">Admin</p>
                    <div className="viewv">
                        <button type="button" onClick={() => navigate('/view')}>View Parcel</button>
                    </div>
                    <div className="searchv">
                        <button type="button" onClick={() => navigate('/search')}>Search User</button>
                    </div>
                </div>

                <div className="parcelv">

                    <button className="parcel1" type="button">Parcel item 1</button>
                    <button className="parcel2" type="button">Parcel item 2</button>
                    <button className="parcel3" type="button">Parcel item 3</button>
                    <button className="parcel4" type="button">Parcel item 4</button>


                </div>
            </div>
        </div>



    )
}







export default View


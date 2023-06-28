import './Search.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';



function Search() {
    const navigate = useNavigate()
    return (
        <div>
            <Navbar bg="light" variant="light" expand="lg">

                <div className="headers">
                    <Navbar.Brand href="#home"><img className="logos" src="src\assets\logo Nav.png" alt="Logo" />
                    <img className="parcel-logos" src="src\assets\parcel-logo.png" alt="Logo" />   </Navbar.Brand>
                </div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
                    <Nav className="mr-auto">
                    <Nav.Link href="#Home" ><Link  className="homelists" to="/">Home</Link></Nav.Link>
                        {/* <Nav.Link href="#About">About</Nav.Link> */}
                        <NavDropdown title="Service" id="basic-nav-dropdown">

                        <NavDropdown.Item href="#View Parcel"><Link className="viewlist"to="/view">View Parcel</Link></NavDropdown.Item>
                            <NavDropdown.Item href="#Search Parcel">Search Parcel</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#Logout">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="containers">

                <div className="images">
                    <img src=".\src\assets\User-Icon-Grey.png" alt="Admin login" />
                    <p className="logo-texts">Admin</p>
                    <div className="views">
                        <button type="button" onClick={() => navigate('/view')}>View Parcel</button>
                    </div>
                    <div className="searchs">
                        <button type="button">Search User</button>
                    </div>
                </div>

                <div className="Adminds">
                    {/* <div className="firstclass"> */}
                    <div className="idsearch1">
                    <input type="text" class="form-control form-control-lg" id="username"placeholder="user id" />
                        <button className="go" type="button">Search</button>
                    </div>
                {/* </div> */}

                {/* <div className="secondclass"> */}

                    <div className="idsearch2">
                    <input type="text" class="form-control form-control-lg" id="username" />
                        <button className="show1" type="button">view details</button>
                    </div>

                    <div className="idsearch3">
                    <input type="text" class="form-control form-control-lg" id="username"/>
                        <button className="show2" type="button">view details</button>
                    </div>

                    <div className="idsearch4">
                    <input type="text" class="form-control form-control-lg" id="username"/>
                        <button className="show3" type="button">view details</button>
                    </div>

                    <div className="idsearch4">
                    <input type="text" class="form-control form-control-lg" id="username"/>
                        <button className="show4" type="button">view details</button>
                    </div>
                {/* </div> */}


            </div>

        </div>

        </div >
    )
}

export default Search

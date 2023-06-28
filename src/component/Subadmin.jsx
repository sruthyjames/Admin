import './Subadmin.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


function Subadmin() {
    const navigate = useNavigate()
    return (
        <div>
            <Navbar bg="light" variant="light" expand="lg">

                <div className="headersu">
                    <Navbar.Brand href="#home"><img className="logosu" src="src\assets\logo Nav.png" alt="Logo" />
                        <img className="parcel-logosu" src="src\assets\parcel-logo.png" alt="Logo" /> </Navbar.Brand>
                </div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
                    <Nav className="mr-auto">
                        <Nav.Link href="#Home" ><Link className="homelist" to="/">Home</Link></Nav.Link>
                        {/* <Nav.Link href="#About">About</Nav.Link> */}
                        <NavDropdown title="Service" id="basic-nav-dropdown">

                            <NavDropdown.Item href="#View Parcel">View Parcel</NavDropdown.Item>
                            <NavDropdown.Item href="#Search Parcel"><Link className="searchlist" to="/search">Search Parcel</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#Logout">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="containersu">

                <div className="imagesu">
                    <img src=".\src\assets\User-Icon-Grey.png" alt="Sub Admin login" />
                    <p className="logo-textsu">Sub Admin</p>
                    {/* <div className="viewsu">
                        <button type="button" onClick={() => navigate('/view')}>View Parcel</button>
                    </div>
                    <div className="searchsu">
                        <button type="button" onClick={() => navigate('/search')}>Search User</button>
                    </div> */}
                </div>

                <div className="tablesu">

                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>Parcel ID</th>
                                <th>
                                    <NavDropdown title="Status" id="basic-nav-dropdown">

                                        <NavDropdown.Item href="#Packed">Packed</NavDropdown.Item>
                                        <NavDropdown.Item href="#In transit">In transit </NavDropdown.Item>
                                        <NavDropdown.Item href="#Shipped">Shipped </NavDropdown.Item>
                                        <NavDropdown.Item href="#Delivery">Out for delivery </NavDropdown.Item>
                                    </NavDropdown>
                                </th>
                                {/* <th>Duration</th> */}
                                <th>
                                    <NavDropdown title="Duration"  id="basic-nav-dropdown">

                                        <NavDropdown.Item href="#1day">1 day</NavDropdown.Item>
                                        <NavDropdown.Item href="#2days">2 days </NavDropdown.Item>
                                        <NavDropdown.Item href="#3days">3 days</NavDropdown.Item>
                                        <NavDropdown.Item href="#4 days">4 days </NavDropdown.Item>
                                        <NavDropdown.Item href="#5 days">5 days </NavDropdown.Item>
                                        <NavDropdown.Item href="#6 days">6 days </NavDropdown.Item>
                                        <NavDropdown.Item href="#7 days">7 days </NavDropdown.Item>
                                        <NavDropdown.Item href="#8 days">8 days </NavDropdown.Item>
                                        <NavDropdown.Item href="#9 days">9 days </NavDropdown.Item>
                                        <NavDropdown.Item href="#10 days">10 days </NavDropdown.Item>
                                        <NavDropdown.Item href="#11 days">11 days </NavDropdown.Item>
                                        <NavDropdown.Item href="#12 days">12 days </NavDropdown.Item>
                                        <NavDropdown.Item href="#13 days">13 days </NavDropdown.Item>
                                        <NavDropdown.Item href="#14 days">14 days </NavDropdown.Item>
                                    </NavDropdown>
                                </th>
                                <th>
                                    <NavDropdown title="Location" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#Kochi">Kochi</NavDropdown.Item>
                                        <NavDropdown.Item href="#Trivandrum">Trivandrum </NavDropdown.Item>
                                        <NavDropdown.Item href="#Chennai">Chennai </NavDropdown.Item>
                                        <NavDropdown.Item href="#Bangalore">Bangalore</NavDropdown.Item>
                                        <NavDropdown.Item href="#Hyderabad">Hyderabad</NavDropdown.Item>
                                    </NavDropdown></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>john@example.com</td>
                                <td>Admin</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jane Smith</td>
                                <td>jane@example.com</td>
                                <td>User</td>
                            </tr> */}
                            {/* <!-- Additional table rows --> */}
                        </tbody>
                    </table>


                </div>
            </div>
        </div>



    )
}







export default Subadmin


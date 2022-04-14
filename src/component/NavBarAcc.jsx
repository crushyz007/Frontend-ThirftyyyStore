import React from "react"
import { Navbar, Nav, Container, Stack, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import "../css/NavBarLogin.css"
import logobrand from "../assets/new_logo2.svg"
import logoinbox from "../pic/envelope (1).png"
import logobell from "../pic/bell.png"
import logoshopping from "../pic/shopping-bag-add.png"

const NavBarAcc = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="container__nav">
            <Navbar.Brand href="#home">
                <embed
                    src={logobrand}
                    className="d-inline-block align-bottom ms-3"
                    width="130"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="navbar__collapse">
                <Nav className="me-auto ms-3 nav__text">
                    <Nav.Link href="#goods" className="goods__text me-5">Goods</Nav.Link>
                    <Nav.Link href="#trading" className="trade__text me-5">Trading </Nav.Link>
                    <Nav.Link href="#auction" className="auction__text">Auction</Nav.Link>
                </Nav>
                <Nav className="contain__right">
                    <div className="logo__bar">
                        <Link to="#">
                            <img
                                src={logoinbox}
                                alt="#inbox"
                                width="26"
                                className="me-3"
                            />
                        </Link>
                        <img
                            src={logobell}
                            alt="#bell"
                            height="20"
                            className="me-3 mt-1"
                        />
                        <Link to="#">
                            <img
                                src={logoshopping}
                                alt="#shop"
                                width="26"
                                className="me-3 mb-1"
                            />
                        </Link>
                    </div>
                    {/* <Nav.Link href="#goods" className="goods__text me-5">Account</Nav.Link> */}
                    <NavDropdown title="Account" id="collasible-nav-dropdown" className="acc__dropdown" align="end" data>
                        <NavDropdown.Item href="#yourProfile" >Your profile</NavDropdown.Item>
                        <NavDropdown.Item href="#yourAuction">Your Auction</NavDropdown.Item>
                        <NavDropdown.Item href="#yourTrading">Your trading</NavDropdown.Item>
                        <NavDropdown.Item href="#purchased">Purchased</NavDropdown.Item>
                        <NavDropdown.Item href="#tracking">Tracking</NavDropdown.Item>
                        <NavDropdown.Item href="#registerforsell">Register for sell</NavDropdown.Item>
                        <NavDropdown.Item href="#logout" className="logout__text">Log out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBarAcc
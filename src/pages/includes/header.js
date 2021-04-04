import React, { Fragment } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';


function Header() {
  const location = useLocation();

  return (
    <Fragment>
      {console.log("location.pathname::",location.pathname)}
      <StickyHeader
    // This is the sticky part of the header.
    header={
      <header>
        <div className="nav_sec">
          <Container>
            <Navbar nav="light" expand="lg">
              <Navbar.Brand href="/">
                <span className="blue">H</span>alari
                <span className="green">.</span>
              </Navbar.Brand>
              <Navbar.Toggle
                // aria-controls="basic-navbar-nav"
                className="navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#Navigation"
                aria-controls="Navigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
                <span></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="Navigation">
                <Nav className="ml-auto">
                  <NavDropdown
                    title="Home"
                    id="navbarDropdown"
                    className={`${
                      (location.pathname === "/" ||
                        location.pathname === "/layout2" ||
                        location.pathname === "/layout3" ||
                        location.pathname === "/layout4") &&
                      "active"
                    } home`}
                  >
                    <Link
                      to="/"
                      className={`${
                        location.pathname === "/" && "active"
                      } dropdown-item`}
                    >
                      Home 1
                    </Link>
                    <Link
                      to="/layout2"
                      className={`${
                        location.pathname === "/layout2" && "active"
                      } dropdown-item`}
                    >
                      Home 2
                    </Link>
                    <Link
                      to="/layout3"
                      className={`${
                        location.pathname === "/layout3" && "active"
                      } dropdown-item`}
                    >
                      Home 3
                    </Link>
                    <Link
                      to="/layout4"
                      className={`${
                        location.pathname === "/layout4" && "active"
                      } dropdown-item`}
                    >
                      Home 4
                    </Link>
                  </NavDropdown>
                  <Nav.Item>
                    <Link
                      to="/about"
                      className={`${
                        location.pathname === "/about" && "active"
                      } about nav-link`}
                    >
                      About
                    </Link>
                  </Nav.Item>

                  <NavDropdown
                    title="Service"
                    id="navbarDropdown"
                    className={`${
                      (location.pathname === "/service" ||
                        location.pathname === "/service2") &&
                      "active"
                    } service`}
                  >
                    <Link
                      to="/service"
                      className={`${
                        location.pathname === "/service" && "active"
                      } dropdown-item`}
                    >
                      Service 1
                    </Link>
                    <Link
                      to="/service2"
                      className={`${
                        location.pathname === "/service2" && "active"
                      } dropdown-item`}
                    >
                      Service 2
                    </Link>
                  </NavDropdown>
                  <Nav.Item>
                    <Link
                      to="/portfolio"
                      className={`${
                        location.pathname === "/portfolio" && "active"
                      } portfolio nav-link`}
                    >
                      Portfolio
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link
                      to="/team"
                      className={`${
                        location.pathname === "/team" && "active"
                      } team nav-link`}
                    >
                      Team
                    </Link>
                  </Nav.Item>
                  <NavDropdown
                    title="Pricing"
                    id="navbarDropdown"
                    className={`${
                      (location.pathname === "/pricing" ||
                        location.pathname === "/pricing2" ||
                        location.pathname === "/pricing3") &&
                      "active"
                    } pricing`}
                  >
                    <Link
                      to="/pricing"
                      className={`${
                        location.pathname === "/pricing" && "active"
                      } dropdown-item`}
                    >
                      {" "}
                      Pricing 1
                    </Link>
                    <Link
                      to="/pricing2"
                      className={`${
                        location.pathname === "/pricing2" && "active"
                      } dropdown-item`}
                    >
                      Pricing 2
                    </Link>
                    <Link
                      to="/pricing3"
                      className={`${
                        location.pathname === "/pricing3" && "active"
                      } dropdown-item`}
                    >
                      Pricing 3
                    </Link>
                  </NavDropdown>
                  <Nav.Item>
                    <Link
                      to="/blog"
                      className={`${
                        location.pathname === "/blog" && "active"
                      } blog nav-link`}
                    >
                      Blog
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link
                      to="/contact"
                      className={`${
                        location.pathname === "/contact" && "active"
                      } contact nav-link`}
                    >
                      Contact
                    </Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>
        </div>
      </header>
   }
   />
   </Fragment>
  );
}

export default Header;

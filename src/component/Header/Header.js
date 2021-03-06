import React from "react";
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            React-Bootstrap
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1}>
            <NavLink to="/home"> Home </NavLink>
          </NavItem>
          <NavItem eventKey={2}  >
            <NavLink to="/user">User</NavLink>
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
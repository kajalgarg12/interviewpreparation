import React from "react";
import { Nav, Navbar  } from 'react-bootstrap';
import { NavLink  } from "react-router-dom";

export const NavBarMenu = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Products</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-Navbar-nav" />
          
            <Nav className="me-auto">
                <NavLink className="show-products-nav" to="/" >Products</NavLink>
                <NavLink className="add-product-nav"   to="/addProduct" >Addproducts</NavLink> 
                   
            </Nav>
          
      </Navbar>
    </div>
  );
};

export default NavBarMenu;

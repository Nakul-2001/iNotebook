import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  background-color: purple;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: #fff;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.div`
  a{
    color: white;
    text-decoration:none;
  }
  a:hover {
    text-decoration: underline;
  }
  padding:5px;
`;

const Navbar1 = () => {
  return (
    <NavbarContainer>
      <Logo>iNotebook</Logo>
      <NavLinks>
        <NavLink><Link to='/'>Home</Link></NavLink>
        <NavLink><Link to='/aboutus'>About Us</Link></NavLink>
        <NavLink><Link to='/register'>Sign Up</Link></NavLink>
        <NavLink><Link to='/login'>Sign In</Link></NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar1;


import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { loginFailure } from '../Redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { MdLogout } from "react-icons/md";

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: purple;
  color: #fff;
`;

const AppName = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.div`
  a{
    color: white;
    text-decoration:none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Username = styled.div`
  margin-right:10px;
`;

const Navbar2 = () => {

  const {currentUser} = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("user",null);
    dispatch(loginFailure());
    navigate('/');
  }

  return (
    <NavbarContainer>
      <AppName>iNotebook</AppName>
      <NavLinks>
        <NavLink><Link to='/'>Home</Link></NavLink>
        <NavLink><Link to='/aboutus'>About Us</Link></NavLink>
        <NavLink><Link to='/notes'>All Notes</Link></NavLink>
      </NavLinks>
      <SearchContainer>
        <Username>{currentUser.username}</Username>
        <MdLogout onClick={handleClick}/>
      </SearchContainer>
    </NavbarContainer>
  );
};

export default Navbar2;

import React from 'react'
import styled from 'styled-components';
import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';
import { useSelector } from 'react-redux';

// Styled components
const AboutContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
`;

const Title = styled.h2`
  color: #333;
  font-size: 24px;
`;

const Description = styled.p`
  color: #555;
  font-size: 16px;
  line-height: 1.6;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 20px;
`;

const AboutUs = () => {
  const {currentUser} = useSelector((state)=>state.user);
  return (
    <AboutContainer>
      {!currentUser && <Navbar1></Navbar1>}
      {currentUser && <Navbar2></Navbar2>}
      <Title>About Us</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit sit amet purus luctus
        tempor. Nulla facilisi. In vitae ex eu arcu bibendum aliquet. Vivamus commodo, velit ac
        fringilla fermentum, felis lorem rutrum justo, id vehicula leo nunc quis est.
      </Description>
      <Image src="https://via.placeholder.com/400" alt="About Us" />
    </AboutContainer>
  );
};

export default AboutUs;


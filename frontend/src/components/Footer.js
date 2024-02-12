import React from 'react';
import styled from 'styled-components';

// Styled components for the footer
const FooterContainer = styled.footer`
  background-color: purple;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: underline;
`;

// Footer component
const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © {new Date().getFullYear()} Your iNotebook App. All rights reserved. 
        Built with <FooterLink href="https://reactjs.org/" target="_blank">React</FooterLink> and 
        styled with <FooterLink href="https://styled-components.com/" target="_blank">styled-components</FooterLink>.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;

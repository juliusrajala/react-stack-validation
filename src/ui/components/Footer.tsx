import * as React from 'react';
import styled from 'styled-components';

const FooterBar = styled.div`
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-family: Montserrat, sans-serif;
  font-weight: 600;

  @media (max-width: 500px), (max-device-width: 500px) {
    > * {
      font-size: 1rem;
    }
  }
`;


const Footer = () => (
  <FooterBar>
    This is a footer
  </FooterBar>
);

export default Footer;
import * as React from 'react';
import { Heading, Page, Paragraph } from 'src/ui/styles';
import styled from 'styled-components';

const P1 = `Did you know that giraffes use their heads as weapons?`;
const P2 = `
  I think this is super terrifying. Imagine going about your
  business and just happening upon a pair of giraffes flailing their
  heads at each other to assert superiority.
`;
const P3 = `
  Nature can be weird. Then again, I'm sitting inside on a beautiful
  and warm summer day, writing placeholders that nobody will likely read.
`;

const Greeting = styled.section`
  width: 600px;
  max-width: 100%;
  text-align: left;
`;

const StyledButton = styled.button`
  border: 2px solid salmon;
  color: salmon;
  background: #fff;
  margin: 10px;
  float: right;
  padding: 10px 20px;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 20px;
  border-radius: 4px;
  box-shadow: 2px 1px 9px 1px rgba(0,0,0,.2);

  :hover {
    background-color: salmon;
    color: #fff;
  }

  :focus, :active {
    box-shadow: 1px 0px 6px 1px rgba(0,0,0,.2);
  }
`;

const MainView = (props) => {
  return (
    <Page>
      <Greeting>
        <Heading>Hello World!</Heading>
        <Paragraph>{P1}</Paragraph>
        <Paragraph>{P2}</Paragraph>
        <Paragraph>{P3}</Paragraph>
        <StyledButton>Subtract</StyledButton>
        <StyledButton>Add</StyledButton>
      </Greeting>
    </Page>
  )
}

export default MainView;
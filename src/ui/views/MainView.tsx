import * as React from 'react';
import { Heading, Page, Paragraph } from 'src/ui/styles';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from 'src/stores/store';
import StatisticsTable from '../components/StatisticsTable';

const P1 = `Clicking buttons doesn't have to be a chore. Go ahead. :)`;

const Greeting = styled.section`
  width: 600px;
  max-width: 100%;
  text-align: left;
`;

const StyledButton = styled.button`
  border: 2px solid salmon;
  color: salmon;
  background: #fff;
  margin: 20px 10px;
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

const SubHeading = Heading.extend`
  font-size: 2rem;
  color: blue;
  padding: 5px 0px;
`;

const MainView = (props) => {
  const { incrementCount, decrementCount } = props;
  return (
    <Page>
      <Greeting>
        <Heading>Hello World!</Heading>
        <StatisticsTable />
        <Paragraph>{P1}</Paragraph>
        <StyledButton onClick={() => decrementCount()}>Subtract</StyledButton>
        <StyledButton onClick={() => incrementCount()}>Add</StyledButton>
      </Greeting>
    </Page>
  )
}

export default connect(null,
  { incrementCount, decrementCount },
)(MainView);
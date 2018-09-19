import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: salmon;
  font-family: Montserrat;
  margin: 20px 0;
  border-collapse: separate;
  border-spacing: 5px;

  th, td {
    width: 100px;
  }

  th {
    padding: 10px;
    font-weight: 600;
    border-radius: 5px;
    background-color: #fff;
  }

  td {
    padding: 10px;
  }
`

interface IStatisticsTable {
  total: number;
  operations: number;
  doubles: number;
}

const StatisticsTable: React.StatelessComponent<IStatisticsTable> = (props) => {
  const { total, operations, doubles } = props;
  const renderHeading = (items: string[]) => (
    <tr>{items.map(item => <th key={item}>{item}</th>)}</tr>
  );

  const renderRow = (items: number[]) => (
    <tr>{items.map((item, idx: number) => <td key={`table-cell-${idx}`}>{item}</td>)}</tr>
  );

  return (
    <StyledTable>
      <tbody>
        {renderHeading(['Sum', 'Clicks', 'Doubles'])}
        {renderRow([total, operations, doubles])}
      </tbody>
    </StyledTable>
  )
}

export default connect(
  ({ total, operations, doubles })=> ({ total, operations, doubles })
)(StatisticsTable);

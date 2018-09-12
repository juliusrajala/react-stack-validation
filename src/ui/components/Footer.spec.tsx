import * as React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

it('renders a footer with text correctly', () => {
  const result = shallow(<Footer />).find(<div>This is a footer</div>);
  expect(result).toBeTruthy();
})
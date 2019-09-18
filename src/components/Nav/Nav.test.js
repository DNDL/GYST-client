import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';

describe('Nav component', () => {
  it('renders Nav', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper).toMatchSnapshot();
  });
});

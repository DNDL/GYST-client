import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';

describe('Logo component', () => {
  it('renders Logo', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });
});

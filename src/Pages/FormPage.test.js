import React from 'react';
import { shallow } from 'enzyme';
import FormPage from './FormPage';

describe('FormPage component', () => {
  it('renders FormPage', () => {
    const wrapper = shallow(<FormPage history={{}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});

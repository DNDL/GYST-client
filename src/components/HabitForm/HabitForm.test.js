import React from 'react';
import { shallow } from 'enzyme';
import HabitForm from './HabitForm';

describe('HabitForm component', () => {
  it('renders HabitForm', () => {
    const wrapper = shallow(<HabitForm handleSubmit={() => {}} history={{}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});

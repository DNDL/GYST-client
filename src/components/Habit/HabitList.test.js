import React from 'react';
import { shallow } from 'enzyme';
import HabitList from './HabitList';

describe('HabitList component', () => {
  it('renders HabitList', () => {
    const wrapper = shallow(<HabitList habits={[]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});

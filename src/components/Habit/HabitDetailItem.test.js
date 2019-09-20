import React from 'react';
import { shallow } from 'enzyme';
import HabitDetailItem from './HabitDetailItem';

describe('HabitDetailItem component', () => {
  it('renders HabitDetailItem', () => {
    const wrapper = shallow(<HabitDetailItem habit={{}} attempts={[]} handleDelete={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});

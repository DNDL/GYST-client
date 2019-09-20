import React from 'react';
import { shallow } from 'enzyme';
import HabitDetailPage from './HabitDetailPage';

describe('HabitDetailPage component', () => {
  it('renders HabitDetailPage', () => {
    const wrapper = shallow(<HabitDetailPage props={{}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';

import {render} from '@testing-library/react-native';
import {ProvidersToast} from '../../utils/tests/helper';
import {Toast} from '.';

jest.mock('../../contexts/toast', () => ({
  ...jest.requireActual('../../contexts/toast'),
  useToast: () => ({
    message: 'Message default toast',
  }),
}));

describe('<Toast />', () => {
  it('should render toast message default correctly', () => {
    const {getByText} = render(<Toast />, {
      wrapper: ProvidersToast,
    });

    const textMessageDefault = getByText(/Message default toast/);

    expect(textMessageDefault.props.children).toEqual('Message default toast');
  });
});

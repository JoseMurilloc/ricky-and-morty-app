import React from 'react';
import {render} from '@testing-library/react-native';

import {Home} from '../../screens/Home';
import {Providers} from '../../utils/tests/helper';
import {server} from './mock';

// jest.mock('../../hooks/useCharacters', () => ({
//   ...jest.requireActual('../../hooks/useCharacters'),
// }));

describe('<Home />', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  it('should have show correctly counter characters', () => {
    const {getByTestId} = render(<Home />, {wrapper: Providers});
    const textCounterListing = getByTestId('count-listing').children[0];

    expect(textCounterListing).toEqual('0 personagem');
  });

  it('should must have render characters counter after load data of API', async () => {
    const {findByText} = render(<Home />, {wrapper: Providers});
    const textCounterListing = await findByText('20 personagens');

    expect(textCounterListing).toBeTruthy();
  });
});

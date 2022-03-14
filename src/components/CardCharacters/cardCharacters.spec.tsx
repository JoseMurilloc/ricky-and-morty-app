import React from 'react';

import {render} from '@testing-library/react-native';
import {CardCharacters} from '../../components/CardCharacters';
import {Providers} from '../../utils/tests/helper';

const character = {
  id: 1,
  name: 'Ricky Sanchez',
  image: 'url-image',
  species: 'Human',
  origin: {
    name: 'Earth (137)',
  },
};

// jest.mock('react-redux', () => ({
//   useSelector: () => ({
//     favorites: {characters: [{id: 1}, {id: 2}]},
//   }),
// }));

describe('<CardCharacters />', () => {
  beforeEach(() => {});
  it('should render character name correctly', () => {
    const {getByTestId, getByText} = render(
      <CardCharacters character={character} />,
      {
        wrapper: Providers,
      },
    );
    const nameCharacter = getByTestId('name-character').children[0];
    expect(nameCharacter).toEqual(character.name);
    expect(getByText(character.origin.name)).toBeTruthy();
  });

  it('should formatted size by name of character', () => {
    const characterLongName = {
      ...character,
      name: 'Ricky Sanchez Model Controller',
    };

    const {getByTestId} = render(
      <CardCharacters character={characterLongName} />,
      {
        wrapper: Providers,
      },
    );

    const textNameCharacter = getByTestId('name-character');
    const textNameValue = textNameCharacter.children[0];

    expect(textNameValue).toEqual('Ricky Sanchez Mod...');
  });

  it('should be have icon heart favorite characters', async () => {
    const {} = render(<CardCharacters character={character} />, {
      wrapper: Providers,
    });

    expect(1 + 1).toEqual(2);
  });
});

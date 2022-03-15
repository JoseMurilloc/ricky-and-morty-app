import React from 'react';

import {render, fireEvent} from '@testing-library/react-native';
import {InputSearch} from '.';
import {Providers} from '../../utils/tests/helper';

describe('<CardCharacters />', () => {
  it('should render input search placeholder correctly', () => {
    const onSubmitFilter = jest.fn();

    const {getByPlaceholderText} = render(
      <InputSearch
        placeholder="Busque por um personagem"
        autoCorrect={false}
        onSubmitEditing={onSubmitFilter}
      />,
      {
        wrapper: Providers,
      },
    );

    const inputPlaceholder = getByPlaceholderText('Busque por um personagem');

    expect(inputPlaceholder).toBeTruthy();
  });

  it('should change value of input', async () => {
    const onInputMock = jest.fn();
    const searchMock = '';
    const onSubmitFilter = jest.fn();

    const {getByTestId} = render(
      <InputSearch
        placeholder="Busque por um personagem"
        value={searchMock}
        onChangeText={onInputMock}
        autoCorrect={false}
        onSubmitEditing={onSubmitFilter}
        testID="input"
      />,
      {
        wrapper: Providers,
      },
    );
    const inputElement = getByTestId('input');
    const text = 'This is my new text';

    await fireEvent.changeText(inputElement, text);

    expect(onInputMock).toHaveBeenCalledWith(text);
  });
});

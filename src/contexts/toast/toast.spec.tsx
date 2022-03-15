import {renderHook, act} from '@testing-library/react-hooks';
import {useToast} from '.';
import {ProvidersToast} from '../../utils/tests/helper';

describe('Toast context', () => {
  it('should able have state correctly when showToast', () => {
    const {result} = renderHook(() => useToast(), {
      wrapper: ProvidersToast,
    });

    act(() => {
      result.current.showToast({
        messageToast: 'Error ao pesquisar pelo nome',
        statusToast: 'error',
        durationToast: 500,
      });
    });

    expect(result.current.status).toEqual('error');
    expect(result.current.duration).toEqual(500);
    expect(result.current.message).toEqual('Error ao pesquisar pelo nome');
  });

  it('should able have state correctly when hideToast', () => {
    const {result} = renderHook(() => useToast(), {
      wrapper: ProvidersToast,
    });

    act(() => {
      result.current.hideToast();
    });

    expect(result.current.status).toEqual('default');
    expect(result.current.duration).toEqual(400);
    expect(result.current.message).toEqual('Mensagem default');
  });
});

import {
  loadAdverts,
  advertsLoadedRequest,
  advertsLoadedSuccess,
} from '../actions';

describe('loadAdverts', () => {
  const action = loadAdverts();
  const api = {
    adverts: {},
  };

  test('when adverts are loaded', () => {
    const getState = () => ({ adverts: { loaded: true } });
    const dispatch = jest.fn();
    action(dispatch, getState, { api });

    expect(dispatch).not.toHaveBeenCalled();
  });

  test('when getAdverts API resolves', async () => {
    const getState = () => ({ adverts: { loaded: false } });
    const dispatch = jest.fn();
    const adverts = 'adverts';

    api.adverts.getAdverts = jest.fn().mockResolvedValue(adverts);
    await action(dispatch, getState, { api });

    expect(dispatch).toHaveBeenNthCalledWith(1, advertsLoadedRequest());
    expect(api.adverts.getAdverts).toHaveBeenCalled();
    expect(dispatch).toHaveBeenNthCalledWith(2, advertsLoadedSuccess(adverts));
  });
});

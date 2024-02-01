import { adverts, initState } from '../reducers';
import { ADVERTS_LOADED_SUCCESS } from '../types';

describe('adverts', () => {
  test('manage "ADVERTS_LOADED_SUCCESS" action', () => {
    const payload = [{ id: '3' }];
    const action = { type: ADVERTS_LOADED_SUCCESS, payload };
    const prevState = initState.adverts;
    const expectedState = { loaded: true, data: payload };
    expect(adverts(prevState, action)).toEqual(expectedState);
  });
});

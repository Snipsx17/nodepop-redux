import { getAdvert } from '../selectors';

const tags = ['lifestyle', 'motor'];
const adverts = [{ id: '1' }];
const state = { tags, adverts: { data: adverts } };

describe('getAdvert', () => {
  test('should return advert', () => {
    expect(getAdvert('1')(state)).toBe(adverts[0]);
  });
});

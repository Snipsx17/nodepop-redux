//ADVERTS
export const getAreAdvertsLoaded = (state) => state.adverts.loaded;
export const getAdverts = (state) => state.adverts.data;
export const getAdvert = (advertId) => (state) =>
  getAdverts(state).find((advert) => advert.id === advertId);
//AUTH
export const getIsLogged = (state) => state.auth;
//UI
export const getUi = (state) => state.ui;
//TAGS
export const getTags = (state) => state.tags;
export const getAreTagsLoaded = (state) => getTags(state).length > 0;

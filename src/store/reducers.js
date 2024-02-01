import {
  ADVERTS_CREATED_SUCCESS,
  ADVERTS_DELETED_SUCCESS,
  ADVERTS_DETAIL_SUCCESS,
  ADVERTS_LOADED_SUCCESS,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT_SUCCESS,
  TAGS_LOADED,
  UI_RESET_ERROR,
} from './types';

export const initState = {
  auth: false,
  adverts: {
    loaded: false,
    data: [],
  },
  tags: [],
  ui: {
    loading: false,
    error: null,
  },
};
//AUTH
export function auth(state = initState.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return true;
    case AUTH_LOGOUT_SUCCESS:
      return false;
    default:
      return state;
  }
}
//ADVERTS
export const adverts = (state = initState.adverts, action) => {
  switch (action.type) {
    case ADVERTS_LOADED_SUCCESS:
      return { loaded: true, data: action.payload };
    case ADVERTS_DETAIL_SUCCESS:
      return { ...state, data: [action.payload] };

    case ADVERTS_CREATED_SUCCESS:
      return { ...state, data: [...state.data, action.payload] };
    case ADVERTS_DELETED_SUCCESS:
      return {
        ...state,
        data: state.data.filter((advert) => advert.id !== action.payload),
      };
    default:
      return state;
  }
};
//TAGS
export const tags = (state = initState.tags, action) =>
  action.type === TAGS_LOADED ? action.payload : state;
//UI
export function ui(state = initState.ui, action) {
  if (action.error) {
    return { loading: false, error: action.payload };
  }
  if (action.type.endsWith('/request')) {
    return { loading: true, error: null };
  }
  if (action.type.endsWith('/success')) {
    return { loading: false, error: null };
  }

  if (action.type === UI_RESET_ERROR) {
    return { ...state, error: null };
  }
  return state;
}

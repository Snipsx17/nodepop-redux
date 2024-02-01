import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { withExtraArgument } from 'redux-thunk';
import * as reducers from './reducers';
import { adverts, auth } from '../service';
import * as actionCreators from './actions';

const composeEnhancers = composeWithDevTools({ actionCreators });

const failureRedirections =
  (router, redirectMap) => (store) => (next) => (action) => {
    const result = next(action);
    if (action.error) {
      const to = redirectMap[action.payload.statusCode];
      if (to) {
        router.navigate(to);
      }
    }
    return result;
  };

export default function configureStore(preloadedState, { router }) {
  const middlewares = [
    withExtraArgument({ api: { adverts, auth }, router }),
    failureRedirections(router, {
      401: '/login',
      404: '/404',
    }),
  ];

  const store = createStore(
    combineReducers(reducers),
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return store;
}

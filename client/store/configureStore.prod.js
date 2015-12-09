import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import createHistory from 'history/lib/createBrowserHistory'
import routes from '../routes/routes'
import thunk from 'redux-thunk'
import api from '../middleware/api'
import rootReducer from '../modules/reducers'

const finalCreateStore = compose(
  applyMiddleware(thunk, api),
  reduxReactRouter({ routes, createHistory })
)(createStore)

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../modules/reducers', () => {
      const nextRootReducer = require('../modules/reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}


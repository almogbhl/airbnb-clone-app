import { applyMiddleware, createStore } from 'redux'

//Middleware
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from '../middleware/logger'
import { save_state_locally, get_local_state } from '../middleware/local.saver'

//Enhancers
import { composeWithDevTools } from 'redux-devtools-extension'
import monitorReducersEnhancer from '../enhancers/monitorReducer'

//Root Reducer
import rootReducer from './root.reducer'

export default function configureStore() {

  const middleware = [thunkMiddleware,save_state_locally,loggerMiddleware]
  const middlewareEnhancer = applyMiddleware(...middleware)

  const enhancers = [monitorReducersEnhancer,middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)
  //const composedEnhancers = compose(...enhancers)

  const preloadedState = get_local_state()
  const store = createStore(rootReducer, preloadedState, composedEnhancers)
  return store
}
  
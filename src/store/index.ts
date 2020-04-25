import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { firebaseReducer, FirebaseReducer } from 'react-redux-firebase'

// dogs
import { dogsReducer } from './dogs/reducers'
import { DogsState } from './dogs/types'

interface RootReducer {
  firebase: FirebaseReducer.Reducer
  dogs: DogsState
}

const rootReducer = combineReducers<RootReducer>({
  firebase: firebaseReducer,
  dogs: dogsReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export const congigureStore = () => {
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  return createStore(rootReducer, composeWithDevTools(middlewareEnhancer))
}

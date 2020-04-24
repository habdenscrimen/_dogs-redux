import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
  ReactReduxFirebaseProvider,
  ReactReduxFirebaseConfig,
} from 'react-redux-firebase'
import firebase from '~/firebase'

import { congigureStore } from './store'
import { App } from './app'

const store = congigureStore()

// react-redux-firebase config
const rrfConfig: Partial<ReactReduxFirebaseConfig> = {
  userProfile: 'users',
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={rrfConfig}
      dispatch={store.dispatch}
    >
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.querySelector('#root'),
)

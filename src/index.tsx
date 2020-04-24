import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
  ReactReduxFirebaseProvider,
  ReactReduxFirebaseConfig,
} from 'react-redux-firebase'
import { Global } from '@emotion/core'

import { App } from './app'
import firebase from './firebase'
import { congigureStore } from './store'
import { globalStyles } from './styles'

const store = congigureStore()

// react-redux-firebase config
const rrfConfig: Partial<ReactReduxFirebaseConfig> = {}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={rrfConfig}
      dispatch={store.dispatch}
    >
      <Global styles={globalStyles} />

      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.querySelector('#root'),
)

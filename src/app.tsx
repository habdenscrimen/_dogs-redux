import React, { FunctionComponent, Fragment } from 'react'
import { Router } from '@reach/router'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty, useFirebase } from 'react-redux-firebase'

import { LoginPage, GameBoardPage } from './pages'
import { Spinner, Header } from './components'
import { AppState } from './store'

export const App: FunctionComponent = () => {
  const firebase = useFirebase()
  const auth = useSelector((state: AppState) => state.firebase.auth)

  if (!isLoaded(auth)) {
    return <Spinner />
  }

  if (isLoaded(auth) && isEmpty(auth)) {
    return <LoginPage />
  }

  return (
    <Fragment>
      <Header logout={firebase.logout} userName={auth.displayName} />

      <Router>
        <GameBoardPage path="/" />
      </Router>
    </Fragment>
  )
}

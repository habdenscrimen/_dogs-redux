import React, { FunctionComponent, Fragment } from 'react'
import { Router } from '@reach/router'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty, useFirebase } from 'react-redux-firebase'

import { LoginPage, GameBoardPage, MenuPage } from './pages'
import { Spinner } from './components'
import { AppState } from './store'

export const App: FunctionComponent = () => {
  const auth = useSelector((state: AppState) => state.firebase.auth)

  if (!isLoaded(auth)) {
    return <Spinner />
  }

  if (isLoaded(auth) && isEmpty(auth)) {
    return <LoginPage />
  }

  return (
    <Router>
      <MenuPage path="/menu" default auth={auth} />
      <GameBoardPage path="/game" />
    </Router>
  )
}

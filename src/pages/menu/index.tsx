import React, { FunctionComponent, Fragment } from 'react'
import { RouteComponentProps, Link } from '@reach/router'
import { useFirebase, FirebaseReducer } from 'react-redux-firebase'

import { Header } from './components'

interface MenuPageProps extends RouteComponentProps {
  auth: FirebaseReducer.AuthState
}

export const MenuPage: FunctionComponent<MenuPageProps> = ({ auth }) => {
  const firebase = useFirebase()

  return (
    <Fragment>
      <Header logout={firebase.logout} userName={auth.displayName} />

      <main>
        <span>Menu Page</span>

        <div>
          <Link to="/game">Play with AI</Link>
        </div>
      </main>
    </Fragment>
  )
}

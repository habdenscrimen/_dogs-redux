import React, { FunctionComponent } from 'react'
import { useFirebase } from 'react-redux-firebase'

export const LoginPage: FunctionComponent = () => {
  const firebase = useFirebase()

  const loginWithGoogle = () => {
    firebase.login({ provider: 'google', type: 'popup' })
  }

  return (
    <main>
      <button onClick={loginWithGoogle}>Login with Google</button>
    </main>
  )
}

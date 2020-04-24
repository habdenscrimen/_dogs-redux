import React, { FunctionComponent } from 'react'
import { useFirebase } from 'react-redux-firebase'

export const LoginPage: FunctionComponent = () => {
  const firebase = useFirebase()

  const loginWithGoogle = () => {
    firebase.login({ provider: 'google', type: 'popup' }).then(({ user }) =>
      firebase.set(`users/${user.uid}`, {
        email: user.email,
        displayName: user.displayName,
        avatarUrl: user.photoURL,
        username: user.uid,
      }),
    )
  }

  return (
    <main>
      <button onClick={loginWithGoogle}>Login with Google</button>
    </main>
  )
}

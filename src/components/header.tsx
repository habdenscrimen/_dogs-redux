import React, { FunctionComponent } from 'react'

interface HeaderProps {
  logout: () => void
}

export const Header: FunctionComponent<HeaderProps> = ({ logout }) => {
  return (
    <header>
      <button onClick={logout}>Logout</button>
    </header>
  )
}

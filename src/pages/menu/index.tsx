import React, { FunctionComponent } from 'react'
import { RouteComponentProps, Link } from '@reach/router'

export const MenuPage: FunctionComponent<RouteComponentProps> = () => {
  return (
    <main>
      <span>Menu Page</span>

      <Link to="/game">Play</Link>
    </main>
  )
}

import React, { FunctionComponent } from 'react'
import { RouteComponentProps, Link } from '@reach/router'

export const GameBoardPage: FunctionComponent<RouteComponentProps> = () => {
  return (
    <main>
      GameBoard page
      <Link to="/menu">Leave game</Link>
    </main>
  )
}

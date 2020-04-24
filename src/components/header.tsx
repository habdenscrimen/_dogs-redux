import React, { FunctionComponent } from 'react'
import { css } from '@emotion/core'

interface HeaderProps {
  logout: () => void
}

export const Header: FunctionComponent<HeaderProps> = ({ logout }) => {
  return (
    <header css={styles.container}>
      <button onClick={logout}>Logout</button>
    </header>
  )
}

const styles = {
  container: css`
    height: 50px;
  `,
}

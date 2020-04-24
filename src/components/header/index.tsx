import React, { FunctionComponent } from 'react'

import { Logo, AccountSection, Container, LogoutIcon } from './styled'

interface HeaderProps {
  logout: () => void
  userName: string
}

export const Header: FunctionComponent<HeaderProps> = ({ logout, userName }) => {
  return (
    <Container>
      <Logo>Dogs-Redux</Logo>

      <AccountSection>
        <span>{userName}</span>

        <LogoutIcon size={18} onClick={logout} />
      </AccountSection>
    </Container>
  )
}

import styled from '@emotion/styled'
import { LogOut } from 'react-feather'

export const Container = styled.header`
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 30px;
  background-color: whitesmoke;
`

export const Logo = styled.span`
  font-weight: bold;
  font-size: 18px;
`

export const AccountSection = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  gap: 12px;
  align-items: center;
`

export const LogoutIcon = styled(LogOut)`
  cursor: pointer;
`

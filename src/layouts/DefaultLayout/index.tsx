import { Outlet } from 'react-router-dom'
import { BodyContainer, DefaultLayoutContainer, HeaderLogo } from './styles'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <HeaderLogo />
      <BodyContainer>
        <Outlet />
      </BodyContainer>
    </DefaultLayoutContainer>
  )
}

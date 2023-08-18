import { Outlet } from 'react-router-dom'

import background from '../../assets/background.png'

import { BodyContainer, DefaultLayoutContainer, HeaderLogo } from './styles'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <HeaderLogo src={background} />
      <BodyContainer>
        <Outlet />
      </BodyContainer>
    </DefaultLayoutContainer>
  )
}

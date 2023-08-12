import { styled } from "styled-components";

export const DefaultLayoutContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme['blue-900']};
`

export const HeaderLogo = styled.header`
  width: 100%;
  height: 18.5rem;
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 0;
  background-image: url('src/assets/background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const BodyContainer = styled.div`
 width: 100vw;
 position: absolute;
 top: 208px;
`
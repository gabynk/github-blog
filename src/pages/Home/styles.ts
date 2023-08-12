import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  margin: 0 18rem;
`

export const ProfileCard = styled.div`
  display: flex;
  border-radius: 10px;
  padding: 2rem;
  background: ${(props) => props.theme['blue-600']};
  gap: 2rem;

  & img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

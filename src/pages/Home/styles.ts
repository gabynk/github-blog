import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  margin: 0 18rem;

  @media (max-width: 1250px) {
    margin: 0 8rem;
  }

  @media (max-width: 950px) {
    margin: 0 2rem;
  }

  @media (max-width: 650px) {
    margin: 0 1rem;
  }
`

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2rem;
  gap: 2rem;

  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

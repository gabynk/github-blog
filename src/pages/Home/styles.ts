import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  height: 100%;
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

export const PostsAmount = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4.5rem 0 0.75rem;

  & h1 {
    color: ${(props) => props.theme['blue-100']};
    font-size: 1.25rem;
  }

  & span {
    color: ${(props) => props.theme['blue-300']};
    font-size: 0.875rem;
  }
`

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2rem;
  gap: 2rem;
  margin: 3rem 0 14rem;

  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

import { styled } from 'styled-components'

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 2rem;
  gap: 1.25rem;
  background: ${(props) => props.theme['blue-600']};

  &:hover {
    border: 1px solid ${(props) => props.theme['blue-400']};
    cursor: pointer;
  }

  & div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    & h1 {
      font-size: 1.25rem;
      line-height: 160%;
    }

    & span {
      width: 30%;
      font-size: 0.875rem;
      text-align: end;
      color: ${(props) => props.theme['blue-300']};
    }

    @media (max-width: 400px) {
      flex-direction: column-reverse;

      & span {
        width: 100%;
      }
    }
  }

  & p {
    color: ${(props) => props.theme['blue-200']};
    line-height: 160%;
  }
`

import { styled } from 'styled-components'

export const PostContainer = styled.div`
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

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 2rem;
  gap: 1.25rem;
  background: ${(props) => props.theme['blue-600']};

  & p {
    margin: 1.25rem 0 0.785rem;
    font-size: 1.5rem;
  }
`

export const Links = styled.div`
  display: flex;
  justify-content: space-between;

  & a {
    display: flex;
    gap: 8px;
    color: ${(props) => props.theme['sky-100']};
    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.75rem;
  }
  & a:hover {
    text-decoration: underline;
  }
`

export const UserInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  color: ${(props) => props.theme['blue-300']};

  & div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 650px) {
    margin-top: 0.5rem;
  }

  @media (max-width: 450px) {
    flex-direction: column;
  }
`

export const IssueContent = styled.div`
  padding: 2.5rem 2rem;
  color: ${(props) => props.theme['blue-200']};
  font-family: 'Nunito', sans-serif;
  line-height: 160%;

  & h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 1.25rem 0;
    text-align: justify;
  }

  & a {
    color: ${(props) => props.theme['sky-100']};
  }

  & ul {
    margin: 1rem 2rem;
  }

  & pre {
    margin: 0.5rem 0;
  }
`

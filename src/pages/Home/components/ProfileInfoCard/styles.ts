import { styled } from 'styled-components'

export const ProfileInfoCardContainer = styled.div`
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

  @media (max-width: 650px) {
    flex-direction: column;
    padding: 1rem;
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & p {
    color: ${(props) => props.theme['blue-200']};
    margin-top: 0.5rem;
    line-height: 160%;
  }
`

export const User = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & span {
    font-size: 1.5rem;
    font-weight: 700;
  }

  & a {
    display: flex;
    gap: 8px;
    color: ${(props) => props.theme['sky-100']};
    font-variant: small-caps;
    line-height: 0.7;
    text-decoration: none;
  }
  & a:hover {
    text-decoration: underline;
  }

  @media (max-width: 450px) {
    flex-direction: column-reverse;

    & a {
      justify-content: flex-end;
    }
  }
`

export const UserInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;

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

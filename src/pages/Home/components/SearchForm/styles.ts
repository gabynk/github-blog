import { styled } from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;

  & input {
    width: 100%;
    padding: 1rem;
    color: ${(props) => props.theme['blue-200']};
    background: ${(props) => props.theme['blue-800']};
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['blue-500']};
  }
  & input::placeholder {
    color: ${(props) => props.theme['blue-400']};
  }
  & input:hover {
    border: 1px solid ${(props) => props.theme['sky-100']};
  }
`

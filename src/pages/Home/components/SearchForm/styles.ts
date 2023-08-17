import { styled } from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  display: flex;
  gap: 1rem;

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

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    color: ${(props) => props.theme['blue-300']};
    border: 1px solid ${(props) => props.theme['blue-500']};
    background: transparent;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      color: ${(props) => props.theme.white};
      border: ${(props) => props.theme['sky-100']};
      background: ${(props) => props.theme['sky-100']};

      transition:
        background-color 0.2s,
        color 0.2s,
        border-color 0.2s;
    }
  }
`

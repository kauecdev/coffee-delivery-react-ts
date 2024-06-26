import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-title']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5px;

  border-radius: 6px;

  height: 100%;
  padding: 0.5875rem;

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
    display: flex;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }

  svg:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

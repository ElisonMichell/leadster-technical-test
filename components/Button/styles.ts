import styled, { css } from 'styled-components'

interface StyleProps {
  selected?: boolean;
}

export const Container = styled.button<StyleProps>`
  border: 1px solid ${props => props.selected ? props.theme.colors.primary : props.theme.colors.text};
  padding: 8px 18px;
  border-radius: 20px;
  font-weight: 600;
  transition: color 0.2s, border 0.2s;
  background: ${props => props.selected && props.theme.colors.primary};
  color: ${props => props.selected && props.theme.colors.white};

  ${props => !props.selected && css`
    :hover {
      color: ${props => props.theme.colors.primary};
      border-color: ${props => props.theme.colors.primary};
    }
  `}
`
import styled, { css } from 'styled-components'

export interface StyleProps {
  selected?: boolean;
  rounded?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'text'
}

export const Container = styled.button<StyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem 0.875rem;
  border-radius: ${props => props.rounded ? '3rem' : '0.5rem'};
  font-weight: 500;
  transition: color 0.2s, border 0.2s;

  ${props => props.variant === 'primary' && css<StyleProps>`
    background: ${props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    padding: 1.5rem 2.75rem;

    ${props => !props.selected && css`
      :hover {
        filter: brightness(1.1);
      }
    `}
  `}

  ${props => props.variant === 'secondary' && css<StyleProps>`
    background: ${props => props.selected && props.theme.colors.primary};
    border: 1px solid ${props => !props.selected && props.theme.colors.text};
    color: ${props => props.selected && props.theme.colors.white};

    ${props => !props.selected && css`
      :hover {
        color: ${props => props.theme.colors.primary};
        border-color: ${props => props.theme.colors.primary};
      }
    `}
  `}

  ${props => props.variant === 'tertiary' && css<StyleProps>`
    padding: 0;
    width: 2.5rem;
    height: 2.5rem;
    border: ${props => props.selected && '1px solid' + props.theme.colors.primary};
    color: ${props => props.selected && props.theme.colors.primary};
    font-weight: ${props => props.selected && '900'};

    ${props => !props.selected && css`
      :hover {
        color: ${props => props.theme.colors.primary};
        border-color: ${props => props.theme.colors.primary};
      }
    `}
  `}

  ${props => props.variant === 'text' && css<StyleProps>`
    width: max-content;
    padding: 0;
    color: ${props => props.theme.colors.graytext};
    font-weight: 500;
    font-size: 1rem;

    :hover {
      color: ${props => props.theme.colors.primary};
    }
  `}
`
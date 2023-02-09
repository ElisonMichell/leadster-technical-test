import styled from 'styled-components'

interface ContainerProps {
  isOpen: boolean;
}

interface LabelProps {
  variant: 'primary' | 'secondary' | 'tertiary'
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  display: ${props => props.isOpen && 'flex' || 'none'};
  align-items: center;
  inset: 0;
  background: #0B305340;
  z-index: 1;
`

export const Frame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: auto;
  max-height: 90vh;
  background: ${props => props.theme.colors.white};
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;

  header {
    padding: 2rem 0;
  }

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 5px;
    top: 0;
    left: 0;
    background: ${props => props.theme.colors.primary};
  }

  .scroll {
    flex: 1;
    overflow: hidden scroll;
    height: max-content;
  }

  & > button {
    position: absolute;
    right: 12px;
    top: 12px;
    padding: 0.5rem;
    color: ${props => props.theme.colors.graytext};
    :hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  padding: 0 1.75rem;
  text-align: justify;

  .title {
    font-weight: bold;
    padding-bottom: 0.5rem;
    margin: 1rem 0 0.5rem;
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }

  .line {
    display: flex;
    margin-bottom: 2rem;
    gap: 0.5rem;
  }
`

export const Label = styled.button<LabelProps>`
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  overflow: hidden;

  background: ${props => props.variant === 'primary' ? '#C2F4EA'
    : props.variant === 'secondary' ? '#C2E6FF'
    : '#FFF8D0'
  };

  :hover {
    filter: brightness(1.1);
  }

  p {
    padding: 0.5rem;
  }

  .icon {
      padding: 0.5rem;
      background: ${props => props.variant === 'primary' ? '#9FEFDF'
      : props.variant === 'secondary' ? '#A1D9FF'
      : '#FFF1A0'
    };
  }
`
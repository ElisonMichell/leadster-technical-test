import styled from 'styled-components'

export const Container = styled.header`
  position: relative;
  display: flex;
  padding-bottom: 1.5rem;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background: ${props => props.theme.colors.border};
  }
`

export const Options = styled.header`
  display: flex;
  gap: 0.5rem;
`

export const Order = styled.header`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
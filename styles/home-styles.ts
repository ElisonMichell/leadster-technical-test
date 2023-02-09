import styled from 'styled-components'

export const Content = styled.section`
  max-width: 1140px;
  margin: 5rem auto;
`

export const CardList = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 1.75rem;
  padding: 60px 0;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background: ${props => props.theme.colors.border};
  }
`

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  margin-top: 2rem;

  div {
    display: flex;
  }
`
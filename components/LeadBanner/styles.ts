import styled from 'styled-components'

export const Root = styled.div`
  background: ${props => props.theme.colors.surface};
	padding: 4rem;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  margin: auto;
  gap: 5rem;
`

export const Chart = styled.div`
  flex: 1;

  img {
    max-width: 739px;
    width: 100%;
    height: auto;
  }
`

export const Content = styled.div`
  .title {
    position: relative;
    padding-bottom: 1.25rem;
    margin-bottom: 1rem;

    ::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background: ${props => props.theme.colors.border};
    }

    h3 {
      font-size: 2.625rem;
      font-weight: 500;
      line-height: 3rem;
      white-space: nowrap;
    }

    p {
      font-size: 1.5rem;
    }
  }

  .line-content {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .footer-content {
    display: flex;
    gap: 0.25rem;
    margin-top: 1rem;
    font-size: 15px;
    font-weight: 600;
    align-items: center;
  }
`
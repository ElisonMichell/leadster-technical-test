import styled from 'styled-components'

export const Container = styled.footer`
  padding-top: 3rem;

  .brand {
    width: max-content;
    margin: auto;
    color: ${props => props.theme.colors.graytext};

    h3 {
      font-size: 15px;
      font-weight: 500;
      text-align: center;
    }
  }
`

export const Content = styled.div`
  display: flex;
  max-width: 1140px;
  margin: 50px auto;

  .links {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 1.5rem;
    
    span {
      font-size: 1.125rem;
      font-weight: bold;
    }
  }

  address {
    b {
      color: ${props => props.theme.colors.text};
    }

    p {
      color: ${props => props.theme.colors.graytext};
    }

    a {
      padding: 1rem;
      border-radius: 50%;
      background: #F7F8FB;
    }

    .social-media {
      display: flex;
      gap: 1rem;
    }
  }
`

export const FooterLine = styled.div`
  padding: 2.5rem 0;
  border-top: 2px solid ${props => props.theme.colors.border};
  .content {
    display: flex;
    justify-content: space-between;
    max-width: 1140px;
    margin: auto;
    font-size: 14px;
    color: ${props => props.theme.colors.graytext};

    a {
      color: ${props => props.theme.colors.primary};
    }
  }
`
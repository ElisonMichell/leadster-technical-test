import { GlobalStyle } from '@/styles/global'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#0077F4',
    surface: '#F0F8FF',
    text: '#1C3C50',
    border: '#C8D4DD',
    graytext: '#578696',
    white: '#FFFFFF',
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

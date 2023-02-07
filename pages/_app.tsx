import { GlobalStyle } from '@/styles/global'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    text: '#1C3C50',
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

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import theme from '../theme'

const GlobalStyle = createGlobalStyle`
body: {
  padding: 0;
  margin: 0;
}
p: {
  padding: 0;
}
`

function MyApp({ Component, pageProps }: AppProps) {
  return (  
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

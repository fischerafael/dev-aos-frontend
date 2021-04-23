import Head from 'next/head'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../src/components/styles/GlobalStyle'
import { theme } from '../src/components/styles/Theme'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Dev Aos</title>
            </Head>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

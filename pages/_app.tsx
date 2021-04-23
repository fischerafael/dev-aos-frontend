import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../src/styles/GlobalStyle'
import { theme } from '../src/styles/Theme'

export default function App({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

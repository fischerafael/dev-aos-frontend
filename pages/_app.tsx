import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../src/components/styles/GlobalStyle'
import { theme } from '../src/components/styles/Theme'

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

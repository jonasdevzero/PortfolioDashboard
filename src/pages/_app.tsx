import type { AppProps } from 'next/app'
import GlobalStyle from "../styles/global"
import { AuthProvider } from "../contexts/AuthContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default MyApp

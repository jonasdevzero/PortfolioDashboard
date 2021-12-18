import type { AppProps } from 'next/app'
import GlobalStyle from "../styles/global"
import { AuthProvider } from "../contexts/AuthContext"
import { DataProvider } from '../contexts/DataContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <DataProvider>
          <Component {...pageProps} />
        </DataProvider>
      </AuthProvider>
    </>
  )
}

export default MyApp

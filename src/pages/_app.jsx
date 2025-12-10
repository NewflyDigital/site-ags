import ReactQueryProvider from '../components/react.query.provider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<ReactQueryProvider><Component {...pageProps} /></ReactQueryProvider>)
}

export default MyApp

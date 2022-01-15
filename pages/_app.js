import '../styles/globals.css'
import 'react-notifications-component/dist/theme.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (<Layout><Component {...pageProps} /></Layout>)
}

export function reportWebVitals(metric) {
  console.log(metric)
}

export default MyApp

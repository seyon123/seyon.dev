import '../styles/globals.css'
import 'react-notifications-component/dist/theme.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = url => {
      window.gtag('config', process.env.NEXT_PUBLIC_ANALYTICS_ID, {
        page_path: url,
      })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (<Layout><Component {...pageProps} /></Layout>)
}

export default MyApp

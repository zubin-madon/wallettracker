import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  
  return (
  <MoralisProvider serverUrl={process.env.NEXT_APP_MORALIS_SERVER_URL} appId={process.env.NEXT_APP_MORALIS_APPLICATION_ID}>
  <Component {...pageProps} />
  </MoralisProvider>
  )
}

export default MyApp

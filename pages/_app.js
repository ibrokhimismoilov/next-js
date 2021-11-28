import Leyaout from '../components/Leyaout'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Leyaout>
      <main>
        <Component {...pageProps} />
      </main>
    </Leyaout>
  )
}

export default MyApp

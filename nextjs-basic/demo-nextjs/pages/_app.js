import Layout from '../components/layout'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>demo-nextjs</title>
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous" ></Script>
      <Script src="https://kit.fontawesome.com/70e1721a75.js" crossOrigin="anonymous" ></Script>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
  
}

export default MyApp

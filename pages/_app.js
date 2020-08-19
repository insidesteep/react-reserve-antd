import App from 'next/app'
import Layout from '../components/_App/Layout'
import 'antd/dist/antd.css'

class MyApp extends App {
  static getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
      console.log(pageProps)
    }
    console.log(pageProps)
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Layout>
        <Component {...pageProps} alo='www' />
      </Layout>
    )
  }
}

export default MyApp

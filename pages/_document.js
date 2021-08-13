import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
        <div id="fb-root"></div>
            <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0&appId=384471815451769&autoLogAppEvents=1" nonce="EOuBxnFy"></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
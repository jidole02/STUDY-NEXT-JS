import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    // next js는 마크업을 건너뛰기에
    // document 파일이 필요
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
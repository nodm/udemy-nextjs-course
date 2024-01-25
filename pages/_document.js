import Document, { Html, Head, Main, NextScript } from 'next/document';

class BlogDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
          <div id="notification" />
        </body>
      </Html>
    );
  }
}

export default BlogDocument;

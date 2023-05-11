import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-N9GD15L2JS"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-N9GD15L2JS');
</script>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
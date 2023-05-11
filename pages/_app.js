import Head from "next/head";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

function MyApp({ Component, pageProps: { session, ...pageProps }  }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-sine",
      once: false,
      offset: 0,
    });
  }, []);
  return (
    <SessionProvider session={session}>
    <Provider store={store}>
      <Head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-N9GD15L2JS"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-N9GD15L2JS');
</script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        {/* !Google Fonts */}
        {/* Styles */}
        <link
          type="text/css"
          rel="stylesheet"
          href="/css/plugins.css?ver=4.1"
        />
        <link type="text/css" rel="stylesheet" href="/css/style.css?ver=4.1" />
        <link rel="shortcut icon" href="/img/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Provider>
    </SessionProvider>
  );
}

export default MyApp;
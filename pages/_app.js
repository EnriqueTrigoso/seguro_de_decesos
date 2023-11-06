import '../styles/globals.css'
import { LanguageProvider } from 'contexts/LanguageContext/LanguageProvider';
import { useEffect } from 'react';
import { setEvaCookie } from 'services/setEvaCookie';
import { appWithTranslation } from 'next-i18next';
import { Raleway } from 'next/font/google'

const raleway = Raleway({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {

  useEffect(() => {

    window.scrollTo(0, 0);
    setEvaCookie()

  }, [])

  return (
    <LanguageProvider>
      <main className={raleway.className}>
        <div id="modal"></div>
        <Component {...pageProps} />
      </main>
    </LanguageProvider >
  )
}

export default appWithTranslation(MyApp);

import '@/styles/globals.css';
import { Open_Sans } from 'next/font/google';
import Layout from "@/components/Layout/Layout";
import { appWithTranslation } from 'next-i18next';

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});

function App({ Component, pageProps }) {
  return (
    <main className={`${openSans.className}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}

export default appWithTranslation(App);

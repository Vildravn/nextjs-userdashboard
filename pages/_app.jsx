import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((pageComponent, pageProps) => pageComponent)

  return getLayout(<Component {...pageProps} />, pageProps)
}

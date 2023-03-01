import Auth from '@/components/auth'
import Public from '@/components/public'
import AuthProvider from '@/providers/authProvider'

export default function App ({ Component, pageProps }) {
  console.log({ Component })
  return (
    <AuthProvider>
      {Component.auth
        ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
          )
        : (
          <Public>
            <Component {...pageProps} />
          </Public>
          )}
    </AuthProvider>
  )
}

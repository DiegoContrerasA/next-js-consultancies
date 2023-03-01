import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials, req) {
        try {
          const { email } = credentials
          const user = email === 'diego.contreras@test.com'
          if (user) {
            return { name: 'Diego Contreras', email: 'diego.contreras@test.com' }
          } else {
            return null
          }
        } catch (e) {
          return null
        }
      }
    })
  ],
  pages: {
    signIn: '/sign-in',
    signOut: '/sign-in',
    error: '/sign-in'
  }
}
export default NextAuth(authOptions)

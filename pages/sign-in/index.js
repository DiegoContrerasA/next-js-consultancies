import { getServerSession } from 'next-auth/next'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

const SignIn = () => {
  const router = useRouter()
  return (
    <>
      <h1>SignIn</h1>
      <button onClick={async () => {
        const { status } = await signIn('credentials', { email: 'diego.contreras@test.com', password: 'asf', redirect: false })
        if (status === 200) {
          return router.replace('/')
        }

        // se manejan los errores
      }}
      >
        login
      </button>
    </>
  )
}

export const getServerSideProps = async ({ req, query, res }) => {
  const session = await getServerSession(req, res, authOptions)

  const { q = '/' } = query

  if (session) {
    return {
      redirect: {
        destination: q.toString(),
        permanent: false
      }
    }
  }

  return {
    props: { }
  }
}

export default SignIn

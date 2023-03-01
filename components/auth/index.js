import { useAuth } from '@/providers/authProvider'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Auth = ({ children }) => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user === null) router.replace('/sign-in')
  }, [user, router])

  if (!user) return <p>Loading</p>

  return (
    <>
      {children}
    </>
  )
}

export default Auth

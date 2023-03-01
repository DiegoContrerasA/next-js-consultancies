import { useAuth } from '@/providers/authProvider'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Public = ({ children }) => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) router.replace('/')
  }, [user, router])

  if (user === undefined || user) return <p>Loading</p>

  return (
    <>
      {children}
    </>
  )
}

export default Public

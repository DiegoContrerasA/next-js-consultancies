import { useRouter } from 'next/router'
import { createContext, useCallback, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined)
  const router = useRouter()

  useEffect(() => {
    const userStorage = localStorage.getItem('user')
    const user = userStorage ? JSON.parse(userStorage) : null
    setUser(user)
  }, [])

  const login = useCallback(() => {
    const user = { name: 'Diego Contreras', profile: 'admin' }
    localStorage.setItem('user', JSON.stringify(user))

    setUser(user)
    router.replace('/')
  }, [router])

  const logout = useCallback(() => {
    setUser(null)
    router.replace('/sign-in')
  }, [router])

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider

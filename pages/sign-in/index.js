import { useAuth } from '@/providers/authProvider'

const SignIn = () => {
  const { login } = useAuth()

  return (
    <>
      <h1>Login</h1>
      <button onClick={login}>Iniciar Sesion</button>
    </>
  )
}

export default SignIn

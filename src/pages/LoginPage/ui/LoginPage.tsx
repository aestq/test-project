import { memo } from 'react'
import { LoginForm } from '@/features/LoginForm'

export const LoginPage = memo(() => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <LoginForm />
    </div>
  )
})

LoginPage.displayName = 'LoginPage'

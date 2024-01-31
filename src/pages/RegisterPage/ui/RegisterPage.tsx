import { memo } from 'react'
import { RegisterForm } from '@/features/RegisterForm'

export const RegisterPage = memo(() => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <RegisterForm />
    </div>
  )
})

RegisterPage.displayName = 'RegisterPage'

import { clsx } from 'clsx'
import { memo } from 'react'
import { Input } from '@/shared/ui'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props

  return (
    <form className={clsx('flex flex-col gap-3', className)}>
      <Input
        placeholder='Username'
      />
      <Input
        placeholder='Password'
        type='password'
      />
    </form>
  )
})

LoginForm.displayName = 'LoginForm'

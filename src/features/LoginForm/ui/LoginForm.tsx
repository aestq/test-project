import { clsx } from 'clsx'
import { type FormEvent, memo } from 'react'
import { getRegisterRoute } from '@/shared/consts'
import { Button, Input } from '@/shared/ui'
import { AppLink } from '@/shared/ui/AppLink.tsx'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <form
      className={clsx('flex flex-col gap-3 w-64', className)}
      onSubmit={onSubmit}
    >
      <h2 className='font-semibold text-2xl'>
        Логин
      </h2>
      <Input
        placeholder='Username'
      />
      <Input
        placeholder='Password'
        type='password'
      />
      <Button>
        Войти
      </Button>
      <AppLink className='text-center' to={getRegisterRoute()}>
        Нет уч. записи?
      </AppLink>
    </form>
  )
})

LoginForm.displayName = 'LoginForm'

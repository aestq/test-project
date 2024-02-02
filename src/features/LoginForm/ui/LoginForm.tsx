import { clsx } from 'clsx'
import { type FormEvent, memo } from 'react'
import { getRegisterRoute } from '@/shared/consts'
import { getMessageError } from '@/shared/lib'
import { Button, Input, AppLink } from '@/shared/ui'
import { useLoginMutation } from '../api/useLoginMutation'
import { useLoginStore } from '../model/store'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props
  const username = useLoginStore.use.username()
  const password = useLoginStore.use.password()
  const setUsername = useLoginStore.use.setUsername()
  const setPassword = useLoginStore.use.setPassword()
  const { mutate, isLoading, isError, error } = useLoginMutation()

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    if(!username || !password) {
      return
    }
    mutate()
  }

  return (
    <form
      className={clsx('flex flex-col gap-3 w-64', className)}
      onSubmit={onSubmit}
    >
      <div>
        <h2 className='font-semibold text-2xl'>
          Логин
        </h2>
        {isError && (
          <p className='text-red-600'>
            {getMessageError(error)}
          </p>
        )}
      </div>
      <Input
        placeholder='Username'
        value={username}
        onChange={setUsername}
      />
      <Input
        placeholder='Password'
        type='password'
        value={password}
        onChange={setPassword}
      />
      <Button
        disabled={isLoading}
      >
        Войти
      </Button>
      <AppLink className='text-center' to={getRegisterRoute()}>
        Нет уч. записи?
      </AppLink>
    </form>
  )
})

LoginForm.displayName = 'LoginForm'

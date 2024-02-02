import { clsx } from 'clsx'
import { type FormEvent, memo } from 'react'
import { getLoginRoute } from '@/shared/consts'
import { getMessageError } from '@/shared/lib'
import { Button, Input, AppLink, Alert } from '@/shared/ui'
import { useRegisterMutation } from '../api/useRegisterMutation'
import { useRegisterStore } from '../model/store'

interface RegisterFormProps {
  className?: string
}

export const RegisterForm = memo((props: RegisterFormProps) => {
  const { className } = props
  const username = useRegisterStore.use.username()
  const password = useRegisterStore.use.password()
  const setUsername = useRegisterStore.use.setUsername()
  const setPassword = useRegisterStore.use.setPassword()
  const { mutate, isLoading, isError, error, isSuccess } = useRegisterMutation()

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
      {isSuccess && (
        <Alert className='w-80'>
          Успешно! <AppLink to={getLoginRoute()}>Перейдите на страницу логина</AppLink>
        </Alert>
      )}
      <div>
        <h2 className='font-semibold text-2xl'>
          Регистрация
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
        Регистрация
      </Button>
      <AppLink className='text-center' to={getLoginRoute()}>
        Есть уч. запись?
      </AppLink>
    </form>
  )
})

RegisterForm.displayName = 'RegisterForm'

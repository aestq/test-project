import { memo } from 'react'
import { LinksTable } from '@/entities/Link'
import { useUserStore } from '@/entities/User'
import { Button } from '@/shared/ui'

export const HomePage = memo(() => {
  const logout = useUserStore(state => state.logout)

  return (
    <div className='w-[80%] mx-auto'>
      <header className='flex justify-between my-5'>
        <h1 className='font-bold text-3xl'>
          Ваши ссылки
        </h1>
        <Button onClick={logout}>
          Выйти
        </Button>
      </header>
      <LinksTable/>
    </div>
  )
})

HomePage.displayName = 'HomePage'

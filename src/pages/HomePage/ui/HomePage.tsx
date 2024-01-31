import { memo } from 'react'
import { useUserStore } from '@/entities/User'
import { Button } from '@/shared/ui'

export const HomePage = memo(() => {
  const logout = useUserStore(state => state.logout)

  return (
    <div>
      <header className='flex justify-end w-[80%] mx-auto my-5'>
        <Button onClick={logout}>
          Выйти
        </Button>
      </header>
      HomePage
    </div>
  )
})

HomePage.displayName = 'HomePage'

import { memo } from 'react'
import { store } from '@/entities/User'
import { Button } from '@/shared/ui'
import { HomePageFilters } from './HomePageFilters'
import { HomePagePagination } from './HomePagePagination'
import { HomePageTable } from './HomePageTable'

export const HomePage = memo(() => {
  const logout = store.use.logout()

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
      <HomePageFilters />
      <HomePageTable />
      <HomePagePagination />
    </div>
  )
})

HomePage.displayName = 'HomePage'

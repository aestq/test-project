import { memo } from 'react'

export const NotFoundPage = memo(() => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <h2 className='text-3xl font-semibold'>
        Страница не найдена
      </h2>
    </div>
  )
})

NotFoundPage.displayName = 'NotFoundPage'

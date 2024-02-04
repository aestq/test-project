import { clsx } from 'clsx'
import { memo } from 'react'

interface SpinnerProps {
  className?: string
}

export const Spinner = memo((props: SpinnerProps) => {
  const { className } = props

  return (
    <div
      className={clsx('inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]', className)}
      role='status'
    >
      <span
        className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'
      />
    </div>
  )
})

Spinner.displayName = 'Spinner'

import { clsx } from 'clsx'
import { type MouseEvent, type ReactNode } from 'react'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose
  } = props

  const closeHandler = () => {
    onClose?.()
  }

  const onContentClick = (event: MouseEvent) => {
    event.stopPropagation()
  }

  const mods = {
    'pointer-events-auto opacity-100 z-50': isOpen
  }

  return (
     <div className={clsx('pointer-events-none opacity-0 fixed inset-0 transition duration-300', mods)}>
      <div
        className='flex justify-center items-center bg-black bg-opacity-40 w-full h-full'
        onClick={closeHandler}
      >
        <div
          className={clsx('bg-stone-700 rounded-lg p-5', className)}
          onClick={onContentClick}
        >
          {children}
        </div>
      </div>
     </div>
  )
}

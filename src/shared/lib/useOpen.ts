import { useCallback, useState } from 'react'

export const useOpen = (init: boolean = false) => {
  const [isOpen, setIsOpen] = useState(init)

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [])

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  return { isOpen, onOpen, onClose }
}

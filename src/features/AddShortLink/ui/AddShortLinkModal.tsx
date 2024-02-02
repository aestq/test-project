import { memo } from 'react'
import { Modal } from '@/shared/ui'
import { useAddShortLinkStore } from '../model/store'
import { AddShortLinkForm } from './AddShortLinkForm'

interface AddShortLinkModal {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const AddShortLinkModal = memo((props: AddShortLinkModal) => {
  const { className, isOpen, onClose } = props
  const setLink = useAddShortLinkStore.use.setLink()

  const onCloseHandler = () => {
    setLink('')
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onCloseHandler}
      className={className}
    >
      <AddShortLinkForm />
    </Modal>
  )
})

AddShortLinkModal.displayName = 'AddShortLinkModal'

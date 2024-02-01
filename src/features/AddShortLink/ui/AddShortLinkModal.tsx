import { memo } from 'react'
import { Modal } from '@/shared/ui'
import { AddShortLinkForm } from './AddShortLinkForm'

interface AddShortLinkModal {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const AddShortLinkModal = memo((props: AddShortLinkModal) => {
  const { className, isOpen, onClose } = props

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={className}
    >
      <AddShortLinkForm onSuccess={onClose} />
    </Modal>
  )
})

AddShortLinkModal.displayName = 'AddShortLinkModal'

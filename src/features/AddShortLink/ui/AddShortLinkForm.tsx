import { clsx } from 'clsx'
import { type FormEvent, memo } from 'react'
import { Button, Input } from '@/shared/ui'
import { useAddShortLink } from '../api/useAddShortLink'
import { useAddShortLinkStore } from '../model/store'

interface AddShortLinkFormProps {
  className?: string
  onSuccess: () => void
}

export const AddShortLinkForm = memo((props: AddShortLinkFormProps) => {
  const { className, onSuccess } = props
  const { mutate, isLoading, isError } = useAddShortLink()
  const link = useAddShortLinkStore(state => state.link)
  const setLink = useAddShortLinkStore(state => state.setLink)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    mutate(link, {
      onSuccess: () => {
        setLink('')
        onSuccess()
      }
    })
  }

  return (
    <form
      className={clsx('flex flex-col gap-3 w-72', className)}
      onSubmit={onSubmit}
    >
      <h2 className='font-semibold text-2xl'>
        Сократить ссылку
      </h2>
      {isError && (
        <p className='text-red-600'>Произошла ошибка</p>
      )}
      <Input
        placeholder='Ссылка'
        value={link}
        onChange={setLink}
      />
      <Button
        disabled={isLoading}
      >
        Сократить
      </Button>
    </form>
  )
})

AddShortLinkForm.displayName = 'AddShortLinkForm'

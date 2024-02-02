import { clsx } from 'clsx'
import { type FormEvent, memo } from 'react'
import { getMessageError } from '@/shared/lib'
import { Button, Input } from '@/shared/ui'
import { useAddShortLinkMutation } from '../api/useAddShortLinkMutation'
import { useAddShortLinkStore } from '../model/store'
import { LinkClipboard } from './LinkClipboard'

interface AddShortLinkFormProps {
  className?: string
}

export const AddShortLinkForm = memo((props: AddShortLinkFormProps) => {
  const { className } = props
  const { mutate, isLoading, data, isError, error } = useAddShortLinkMutation()
  const link = useAddShortLinkStore.use.link()
  const setLink = useAddShortLinkStore.use.setLink()

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    if(!link) {
      return
    }
    mutate(link, {
      onSuccess: () => {
        setLink('')
      }
    })
  }

  return (
    <div className={clsx(className)}>
      <h2 className='font-semibold text-2xl'>
        Сократить ссылку
      </h2>
      {data && <LinkClipboard className='mt-3' link={data} />}
      <form
        className='flex flex-col gap-3 w-[315px] mt-3'
        onSubmit={onSubmit}
      >
        {isError && (
          <p className='text-red-600'>{getMessageError(error)}</p>
        )}
        <Input
          placeholder='Ссылка'
          value={link}
          onChange={setLink}
        />
        <Button
          disabled={isLoading}
          type='submit'
        >
          Сократить
        </Button>
      </form>
    </div>
  )
})

AddShortLinkForm.displayName = 'AddShortLinkForm'

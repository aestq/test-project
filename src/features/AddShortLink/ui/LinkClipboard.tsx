import { clsx } from 'clsx'
import { memo } from 'react'
import { type Link } from '@/entities/Link'
import { getShortLink } from '@/shared/consts'
import { AppLink, CopyButton } from '@/shared/ui'

interface LinkClipboardProps {
  className?: string
  link: Link
}

export const LinkClipboard = memo((props: LinkClipboardProps) => {
  const { className, link } = props

  return (
    <div className={clsx('rounded-xl bg-neutral-800 px-3 py-1.5', className)}>
      <p>
        Ваша сокращенная ссылка
      </p>
      <div className='flex items-center justify-between'>
        <AppLink to={getShortLink(link.short)}>
          {getShortLink(link.short)}
        </AppLink>
        <CopyButton text={getShortLink(link.short)} />
      </div>
    </div>
  )
})

LinkClipboard.displayName = 'LinkClipboard'

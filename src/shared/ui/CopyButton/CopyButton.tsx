import { clsx } from 'clsx'
import { memo, useEffect, useRef, useState } from 'react'
import CopySuccessIcon from '@/shared/assets/copy-success.svg'
import CopyIcon from '@/shared/assets/copy.svg'

interface CopyButtonProps {
  className?: string
  text: string
}

export const CopyButton = memo((props: CopyButtonProps) => {
  const { className, text } = props
  const [isCopy, setIsCopy] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current)
    }
  }, [])

  const onClick = () => {
    navigator.clipboard.writeText(text)
    setIsCopy(true)

    timerRef.current = setTimeout(() => {
      setIsCopy(false)
    }, 400)
  }

  return (
    <button
      className={clsx('bg-none rounded hover:bg-neutral-700 p-1.5', className)}
      title='Скопировать'
      onClick={onClick}
    >
      {isCopy ? <CopySuccessIcon /> : <CopyIcon />}
    </button>
  )
})

CopyButton.displayName = 'CopyButton'

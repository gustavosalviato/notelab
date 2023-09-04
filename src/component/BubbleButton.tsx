import clsx from 'clsx'
import { ComponentProps } from 'react'

type BubbbleButtonProps = ComponentProps<'button'>

export function BubbbleButton({ className, ...props }: BubbbleButtonProps) {
  return (
    <button
      className={clsx(
        'p-2 leading-none hover:bg-zinc-600 duration-300 transition-colors flex items-center justify-center data-[active=true]:text-cyan-500 text-zinc-300 border-none rounded-lg focus:outline-none outline-none',
        className,
      )}
      {...props}
    ></button>
  )
}

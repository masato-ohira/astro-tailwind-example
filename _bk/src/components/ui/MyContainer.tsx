import { twMerge } from 'tailwind-merge'
import type { TwProps } from './TwProps'
import { tw } from 'typewind'

export const MyContainer = (props: TwProps) => {
  const twClass = [
    // tw.mx_auto,
    tw.mx_auto,
    tw.px_4,
    tw.max_w_full,
    tw.lg(tw.max_w_7xl),
  ].join(' ')

  return (
    <div className={twMerge(twClass, props.className)}>{props.children}</div>
  )
}

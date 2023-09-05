import { twMerge } from 'tailwind-merge'
import type { TwProps } from './TwProps'
import { tw } from 'typewind'

export const MyCenter = (props: TwProps) => {
  // const twClass = 'flex items-center justify-center'
  const twClass = tw.flex.items_center.justify_center
  return (
    <div className={twMerge(twClass, props.className)}>{props.children}</div>
  )
}

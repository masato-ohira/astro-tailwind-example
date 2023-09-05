import { twMerge } from 'tailwind-merge'
import type { TwProps } from './TwProps'
import { tw } from 'typewind'

export const MyStack = (props: TwProps) => {
  const twClass = tw.space_y_4
  return (
    <div className={twMerge(twClass, props.className)}>{props.children}</div>
  )
}

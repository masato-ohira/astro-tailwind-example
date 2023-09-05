import { twMerge } from 'tailwind-merge'
import type { TwProps } from './TwProps'
import { tw } from 'typewind'

export const MyHStack = (props: TwProps) => {
  // const twClass = 'flex space-x-4 items-center'
  const twClass = tw.flex.space_x_4.items_center
  return (
    <div className={twMerge(twClass, props.className)}>{props.children}</div>
  )
}

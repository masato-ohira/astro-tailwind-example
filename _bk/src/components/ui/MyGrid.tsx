import { twMerge } from 'tailwind-merge'
import type { TwProps } from './TwProps'
import { tw } from 'typewind'

export const MyGrid = (props: TwProps) => {
  // const twClass = 'grid grid-cols-3 gap-4'
  const twClass = tw.grid.grid_cols_3.gap_4
  return (
    <div className={twMerge(twClass, props.className)}>{props.children}</div>
  )
}

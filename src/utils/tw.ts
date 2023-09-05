// import { twMerge as tw } from 'tailwind-merge'

// export { tw }

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function tw(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

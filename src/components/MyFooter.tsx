import { tw } from '@/utils/tw'
import React from 'react'

export const MyFooter = () => {
  return (
    <div
      className={tw(
        //
        'text-center',
        'bg-gray-800',
        'text-white',
        'p-10',
        'text-2xl',
      )}
    >
      MyFooter
    </div>
  )
}

import { getName } from '@/utils/getName'
import { tw } from '@/utils/tw'

export const MyFooter = () => {
  return (
    <div
      data-is={getName(import.meta)}
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

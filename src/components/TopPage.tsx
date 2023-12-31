import { tw } from '@/utils/tw'
import spots from '@/json/spots.json'
import { MyHeader } from './MyHeader'
import { MyFooter } from './MyFooter'
import { MyBox } from './MyBox'
import { getName } from '@/utils/getName'

export const TopPage = () => {
  return (
    <div data-is={getName(import.meta)}>
      <MyHeader />
      <div
        className={tw(
          //
          'container',
          'py-12',
          'px-4',
        )}
      >
        {spots.map((i) => {
          return <MyBox key={i.id} {...i} />
        })}
      </div>
      <MyFooter />
    </div>
  )
}

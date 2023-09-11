import { tw } from '@/utils/tw'
import spots from '@/json/spots.json'
import { MyHeader } from './MyHeader'
import { MyFooter } from './MyFooter'
import { MyBox } from './MyBox'

export const TopPage = () => {
  return (
    <div>
      <MyHeader />
      <div
        className={tw(
          //
          'container',
          'py-12',
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

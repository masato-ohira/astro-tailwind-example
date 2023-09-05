import { Input } from '@ui/input'
import { Button } from '@ui/button'
import { tw } from '@/utils/tw'

export const TodoAdd = () => {
  return (
    <div
      className={tw(
        //
        `hstack`,
        `gap-4`,
      )}
    >
      <Input
        className={tw(
          //
          `flex-1`,
          `h-10`,
          `max-w-md`,
        )}
      />
      <Button className={tw(``)}>追加</Button>
    </div>
  )
}

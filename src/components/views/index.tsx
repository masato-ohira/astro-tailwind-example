import { tw } from '@/utils/tw'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'

export const TopPage = () => {
  return (
    <div
      className={tw(
        //
        `container`,
        `py-8`,
        `max-w-5xl`,
      )}
    >
      <div className={tw(`space-y-8`)}>
        <h1 className={tw(`text-5xl font-bold`)}>Todo App</h1>
        <TodoAdd />
        <TodoList />
      </div>
    </div>
  )
}

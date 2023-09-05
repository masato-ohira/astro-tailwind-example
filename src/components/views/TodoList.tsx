import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@ui/table'
import { Switch } from '@ui/switch'
import { Button } from '@ui/button'
import { tw } from '@/utils/tw'
// import { Input } from '@ui/input'

const TodoItem = () => {
  const cellClass = tw(
    //
    `w-24 whitespace-nowrap`,
    `text-center`,
  )
  return (
    <TableRow>
      <TableCell>Taskname</TableCell>
      <TableCell className={cellClass}>2023-09-05 00:00</TableCell>
      <TableCell className={cellClass}>
        <Switch />
      </TableCell>
      <TableCell className={cellClass}>
        <Button variant={'destructive'}>削除</Button>
      </TableCell>
    </TableRow>
  )
}

export const TodoList = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>タスク名称</TableHead>
          <TableHead>作成日時</TableHead>
          <TableHead className={tw(`text-center`)}>ON/OFF</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TableBody>
    </Table>
  )
}

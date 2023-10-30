type Props = {
  id: string
  date: string
  title: string
  lead: string
  body: string
}

import { getName } from '@/utils/getName'

export const MyBox = (props: Props) => {
  return (
    <div data-is={getName(import.meta)}>
      <img src='{}' alt='' />
      <dl>
        <dt>{props.title}</dt>
        <dd>{props.lead}</dd>
      </dl>
    </div>
  )
}

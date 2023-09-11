type Props = {
  id: string
  date: string
  title: string
  lead: string
  body: string
}

export const MyBox = (props: Props) => {
  return (
    <div>
      <img src='{}' alt='' />
      <dl>
        <dt>{props.title}</dt>
        <dd>{props.lead}</dd>
      </dl>
    </div>
  )
}

import dayjs from 'dayjs'
import type { SpotType } from './types'

export const SpotBox = ({ spot }: { spot: SpotType }) => {
  return (
    <div className={'card shadow-md rounded-lg'}>
      <figure>
        <img src={`/static/img/spots/thum-${spot.id}.jpg`} alt='' />
      </figure>
      <div className='card-body leading-4'>
        <div className='space-y-2'>
          <div className={'text-sm'}>
            {dayjs(spot.date).format('YYYY/MM/DD')}
          </div>
          <div>{spot.title}</div>
        </div>
        <a
          href={`/spots/${spot.id}/`}
          className='btn mt-4 rounded-full btn-primary btn-outline'
        >
          <p>スポット詳細</p>
        </a>
      </div>
    </div>
  )
}

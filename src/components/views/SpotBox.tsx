import dayjs from 'dayjs'
import type { SpotType } from './types'

export const SpotBox = ({ spot }: { spot: SpotType }) => {
  const detailLink = `/spots/${spot.id}/`

  return (
    <div className={'card shadow-md rounded-lg overflow-hidden'}>
      <a
        href={detailLink}
        className={'inline-block hover:opacity-70 transition-opacity'}
      >
        <figure className={'block aspect-video bg-slate-200'}>
          <img
            className={'aspect-video object-cover'}
            src={`/static/img/spots/thum-${spot.id}.jpg`}
            alt=''
          />
        </figure>
      </a>
      <div className='card-body leading-4'>
        <div className='space-y-2'>
          <div className={'text-sm'}>
            {dayjs(spot.date).format('YYYY/MM/DD')}
          </div>
          <div>{spot.title}</div>
        </div>
        <a
          href={detailLink}
          className='btn mt-4 rounded-full btn-primary btn-outline'
        >
          <p>スポット詳細</p>
        </a>
      </div>
    </div>
  )
}

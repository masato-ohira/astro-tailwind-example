import React from 'react'
import type { SpotType } from './types'
import dayjs from 'dayjs'
import { MyMarkdown } from '../ui/MyMarkdown'
import { MyContainer } from '../ui/MyContainer'

export const SpotDetail = ({ spot }: { spot: SpotType }) => {
  return (
    <MyContainer className={'py-12 pb-24'}>
      <h1 className={'text-4xl border-b pb-4 border-gray-300 mb-4'}>
        {spot.title}
      </h1>
      <div className={'mb-4 text-right'}>
        {dayjs(spot.date).format('YYYY/MM/DD')}
      </div>
      <div className={'mb-12'}>
        <img
          className={'w-full h-auto'}
          src={`/static/img/spots/mv-${spot.id}.jpg`}
          alt=''
        />
      </div>
      <MyMarkdown className={'markdown-body'}>{spot.body}</MyMarkdown>

      <div className='text-center mt-8'>
        <a
          href={'/'}
          className='btn btn-lg w-72 btn-primary btn-outline rounded-full'
        >
          <span>一覧に戻る</span>
        </a>
      </div>
    </MyContainer>
  )
}

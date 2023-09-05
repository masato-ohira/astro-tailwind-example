import type { SpotType } from './types'
import dayjs from 'dayjs'
import { MyMarkdown } from '../ui/MyMarkdown'
import { MyContainer } from '../ui/MyContainer'
import { tw } from 'typewind'

export const SpotDetail = ({ spot }: { spot: SpotType }) => {
  return (
    <MyContainer className={'py-12 pb-24'}>
      <h1
        className={[
          tw.text_2xl,
          tw.lg(tw.text_4xl),
          tw.border_b,
          tw.border_gray_300,
          tw.pb_4,
          tw.mb_4,
        ].join(' ')}
      >
        {spot.title}
      </h1>
      <div className={'mb-4 text-right'}>
        {dayjs(spot.date).format('YYYY/MM/DD')}
      </div>
      <figure
        className={[
          tw.display,
          tw.mb_12,
          tw.aspect_video,
          tw.bg_slate_200,
        ].join(' ')}
      >
        <img
          className={tw.block.aspect_video.object_cover}
          src={`/static/img/spots/mv-${spot.id}.jpg`}
          alt=''
        />
      </figure>
      <MyMarkdown className={'markdown-body'}>{spot.body}</MyMarkdown>

      <div className={tw.text_center.mt_16}>
        <a
          href={'/'}
          className={[
            tw.btn,
            tw.btn_primary,
            tw.btn_outline,
            tw.rounded_full,
            tw.text_lg,
            tw.w_72,
            // tw.w_36,
          ].join(' ')}
        >
          <span>一覧に戻る</span>
        </a>
      </div>
    </MyContainer>
  )
}

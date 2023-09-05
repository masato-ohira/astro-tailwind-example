import dayjs from 'dayjs'
import type { SpotType } from './types'
import { tw } from 'typewind'

export const SpotBox = ({ spot }: { spot: SpotType }) => {
  const detailLink = `/spots/${spot.id}/`

  return (
    <div
      className={[
        tw.card,
        tw.shadow_md,
        tw.rounded_lg,
        tw.overflow_hidden,
      ].join(' ')}
    >
      <a
        href={detailLink}
        className={[
          tw.inline_block,
          tw.transition_opacity,
          tw.hover(tw.opacity_70),
        ].join(' ')}
      >
        <figure className={tw.block.aspect_video.bg_slate_200}>
          <img
            className={tw.aspect_video.object_cover}
            src={`/static/img/spots/thum-${spot.id}.jpg`}
            alt=''
          />
        </figure>
      </a>
      <div className={tw.card_body.leading_4}>
        <div className={tw.space_y_2}>
          <div className={tw.text_sm}>
            {dayjs(spot.date).format('YYYY/MM/DD')}
          </div>
          <div>{spot.title}</div>
        </div>
        <a
          href={detailLink}
          className={[
            tw.btn,
            tw.btn_primary,
            tw.btn_outline,
            tw.mt_4,
            tw.rounded_full,
          ].join(' ')}
        >
          <p>スポット詳細</p>
        </a>
      </div>
    </div>
  )
}

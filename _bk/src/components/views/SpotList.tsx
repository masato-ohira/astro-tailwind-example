import { MyContainer } from '@/components/ui/MyContainer'
import { MyGrid } from '@/components/ui/MyGrid'
import { SpotBox } from './SpotBox'
import spotsJson from '@/json/spots.json'

import { tw } from 'typewind'

export const SpotList = () => {
  // const twClass = tw.mb_3
  return (
    <MyContainer className={tw.py_12}>
      <MyGrid
        className={[
          tw.grid_cols_1,
          tw.gap_12,
          tw.sm(tw.grid_cols_2),
          tw.sm(tw.gap_6),
          tw.lg(tw.grid_cols_3),
          tw.lg(tw.gap_10),
        ].join(' ')}
      >
        {spotsJson.map((i) => {
          return <SpotBox key={i.id} spot={i} />
        })}
      </MyGrid>
    </MyContainer>
  )
}

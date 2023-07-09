import { MyContainer } from '@/components/ui/MyContainer'
import { MyGrid } from '@/components/ui/MyGrid'
import { SpotBox } from './SpotBox'
import spotsJson from '@/json/spots.json'

export const SpotList = () => {
  return (
    <MyContainer className={'py-12'}>
      <MyGrid
        className={
          'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-6 lg:gap-10'
        }
      >
        {spotsJson.map((i) => {
          return <SpotBox key={i.id} spot={i} />
        })}
      </MyGrid>
    </MyContainer>
  )
}

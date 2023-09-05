import { MyHStack } from '@/components/ui/MyHStack'
import { MyIcon } from '../icons/MyIcon'

export const MyHeader = () => {
  return (
    <div className={'bg-primary text-white py-4 px-6'}>
      <MyHStack className={'justify-between'}>
        <a href='/'>
          <MyHStack className={'space-x-3'}>
            <div className={'text-4xl'}>
              <MyIcon name={'react'} />
            </div>
            <div className={'text-3xl'}>DemoSite</div>
          </MyHStack>
        </a>

        <a href={'/'} className={'text-3xl inline-block'}>
          <MyIcon name={'menu'} />
        </a>
      </MyHStack>
    </div>
  )
}

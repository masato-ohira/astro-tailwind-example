import { tw } from '@/utils/tw'
import { FaReact } from 'react-icons/fa'

export const MyHeader = () => {
  const menu = [
    //
    { id: 'top' },
    { id: 'about' },
    { id: 'guide' },
  ]
  return (
    <div
      className={tw(
        //
        'hstack',
        'justify-between',
        'p-4',
        'bg-primary',
        // 'bg-cyan-600',
        'text-white',
      )}
    >
      <div
        className={tw(
          //
          'hstack',
        )}
      >
        <FaReact className={'text-3xl'} />
        <h1 className={'text-4xl'}>MyApp</h1>
      </div>
      <div>
        <ul
          className={tw(
            //
            'hstack',
            'gap-6',
          )}
        >
          {menu.map((i) => {
            return (
              <li key={i.id}>
                <a
                  href=''
                  className={tw(
                    //
                    'hover:underline',
                  )}
                >
                  {i.id}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

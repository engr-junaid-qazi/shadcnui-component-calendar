import Image from 'next/image'
import {CalendarDemo} from '../components/calendardemo'
import {TypographyH1} from '../components/heading'
import {ButtonDemo} from '../components/buttondemo'

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-3xl pt-5">Shadcn-UI</h1>
      <div className='grid grid-cols-2 gap-8 p-5 m-7'>
        <div>
           
        <TypographyH1/>
        <div className='p-5 gap-4 rounded-lg flex justify-center  
        items-center'> 
        <ButtonDemo text={'Search'} />
        <ButtonDemo text={'Profile'}/>
         </div>
         </div>

          <div className='flex'> 
          <br/>
          <CalendarDemo/>
           </div> 
        </div> 
      </div> 
  )
}

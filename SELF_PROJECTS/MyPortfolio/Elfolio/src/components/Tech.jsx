import {BallCanvas} from './canvas'
import {SectionWrapper} from '../hoc'
import {technologies} from '../constants'
import { styles } from '../styles'


const Tech = () => { 
  return (
    <>
   <p className='text-secondary font-medium lg:text-[25px] sm:text-[16px] xs:text-[13px] text-[16px] lg:leading-[50px]'>Tech Stack</p>
    <div className='flex flex-row flex-wrap justify-center gap-14 py-10'>
    {technologies.map((tech) =>(
      <div className='w-24 h-26' key={tech.name}>
        <BallCanvas icon={tech.icon} />
      </div>
    ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "")
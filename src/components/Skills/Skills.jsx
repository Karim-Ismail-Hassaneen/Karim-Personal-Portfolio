import React from 'react'
import { skills } from '../../utils/AllData'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='uppercase text-xl text-center tracking-widest bg-gradient-to-b from-[#29cbdd] to-[#6482e0] text-transparent bg-clip-text pb-4'>
          My Skills
        </p>
        <h2 className='text-center py-3'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {skills.map(skill => (
            <div key={skill.id} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={`/assets/icons/skills-icons/${skill.image}.png`} alt={skill.title} width={64} height={64}/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>{skill.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills

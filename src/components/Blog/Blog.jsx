import React from 'react'
import ProjectsItems from './ProjectsItems'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
    <div className='text-center max-w-[1240px] mx-auto px-2 py-24'>
      <p className='text-xl tracking-widest uppercase bg-gradient-to-b from-[#29cbdd] to-[#6482e0] text-transparent bg-clip-text'>
        Projects
      </p>
      <h2 className='text-center py-4'>What I&apos;ve Built</h2>
      <div className='grid md:grid-cols-2 gap-8'>
        <ProjectsItems />
      </div>
    </div>
  </div>
  )
}

export default Projects

import React from 'react'
import { projectsDetails } from '../../utils/AllData'
import Image from 'next/image'
import Link from 'next/link'

const ProjectsItems = () => {
  const projects = projectsDetails
  return (
    <>
      {projects.map(project => (
        <div key={project.id} className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400  rounded-xl group hover:bg-gradient-to-b from-[#29cbdd] to-[#6482e0] duration-500'>
          <Image className='object-cover rounded-xl group-hover:opacity-10'
            src={`/assets/images/Projects-Images/${project.image}.jpg`}
            alt='project-image'
            width={700}
            height={600}
          />
          <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl text-white tracking-wider text-center'>{project.title}</h3>
            <Link href={`projects/${project.url}`}>
              <p className='py-2 text-[#ecf0f3] underline cursor-pointer'>More Info</p>
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default ProjectsItems

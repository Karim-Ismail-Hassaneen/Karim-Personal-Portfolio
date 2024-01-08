// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri'
import Image from 'next/image'

const TodoList = () => {
  return (
    <>
        <div className='w-full'>
          <div className='w-screen h-[50vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
            <Image
              className='absolute z-1'
              layout='fill'
              objectFit='cover'
              src={'/assets/images/Projects-Images/todos.jpg'}
              alt='/'
            />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='py-2'>To-Do List</h2>
            </div>
          </div>

          <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
            <div className='col-span-4'>
              <p>Project</p>
              <h2>Overview</h2>
              <p>I built this application in React JS and css and it hosted on Vercel in This application you can write you task and after you finish it you can delete it or strike throught it</p>
              <a href='https://github.com/Karim-Ismail-Hassaneen/Todos-List-React-JS'>
              <button className='px-8 py-2 mt-4 mr-8'>Code</button>
              </a>
              <a href='https://todos-list-react-js.vercel.app/'>
              <button className='px-8 py-2 mt-4'>Demo</button>
              </a>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
              <div className='p-2'>
              <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Css
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Vercel
              </p>
            </div>
              </div>
            </div>
            <Link href='/projects'>
              <p className='underline cursor-pointer'>Back</p>
            </Link>
          </div>
        </div>

    </>
  )
}

export default TodoList

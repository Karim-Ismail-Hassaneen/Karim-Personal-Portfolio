// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri'
import Image from 'next/image'

const Inventory = () => {
  return (
    <>
        <div className='w-full'>
          <div className='w-screen h-[50vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
            <Image
              className='absolute z-1'
              layout='fill'
              objectFit='cover'
              src={'/assets/images/Projects-Images/product.jpg'}
              alt='/'
            />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='py-2'>Inventory Management System</h2>
            </div>
          </div>

          <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
            <div className='col-span-4'>
              <p>Project</p>
              <h2>Overview</h2>
              <p>CRUDS App Was Build With HTML-CSS-JavaScript. You Can Create, Read, Delete, Update, And Search Prodcuts, And All Products Saved In LocalStoreage</p>
              <a href='https://github.com/Karim-Ismail-Hassaneen/Inventory-Management-System---Basic'>
              <button className='px-8 py-2 mt-4 mr-8'>Code</button>
              </a>
              <a href='https://products-management-syst-33996.firebaseapp.com/'>
              <button className='px-8 py-2 mt-4'>Demo</button>
              </a>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
              <div className='p-2'>
              <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
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

export default Inventory

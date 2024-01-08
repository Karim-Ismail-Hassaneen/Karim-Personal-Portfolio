'use client'
import React, { useState } from 'react'
import { navItems } from '../../utils/AllData'
import Link from 'next/link'

const SideBar = () => {
  const items = navItems
  const [isActive, setIsActive] = useState('Home')
  return (

        <div className="fixed right-[1%] top-[40%] z-[20] w-[41px] rounded-full bg-gradient-to-b from-[#29cbdd] to-[#6482e0] text-[#ecf0f3] ">
            <div className="hidden md:flex flex-col gap-5 pb-3 justify-center items-center h-full">
                {items.map(item => (
                    <Link key={item.id} href={item.url} onClick={() => setIsActive(item.title)}>
                        <div className='flex items-center gap-3 py-5 hover:text-[#1f2937] hover:-translate-x-2 duration-700'>
                            <span className={`${isActive === item.title ? 'text-[#1f2937]' : 'text-white'}`}>{item.icon}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

  )
}

export default SideBar

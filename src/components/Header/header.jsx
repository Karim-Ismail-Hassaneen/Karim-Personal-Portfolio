'use client'
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import Nav from './Nav/Nav'
import Image from 'next/image'
import Link from 'next/link'
import Logo from './Logo/logo'
import { navItems, navLinks } from '../../utils/AllData'
import { FaX, FaBarsStaggered } from 'react-icons/fa6'

const Header = () => {
  const items = navItems
  const links = navLinks
  const [sideNav, setSideNav] = useState(false)

  const handleOpen = () => {
    setSideNav(true)
  }
  const handleClose = () => {
    setSideNav(false)
  }
  return (
    <>
      <div className='fixed w-full h-20 z-[200] bg-[#ecf0f3]'>
        <div className="flex justify-between items-center shadow-xl px-2 2xl:px-16">
          <Logo />
          <Nav />
          <div onClick={handleOpen} className="md:hidden cursor-pointer">
            <FaBarsStaggered size={23} />
          </div>
        </div>
        <div className={sideNav ? 'md:hidden fixed right-0 top-0 w-full h-screen bg-black/40' : ''}>
          <div className={sideNav
            ? 'fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] h-screen p-10 ease-in duration-500'
            : 'fixed right-[-100%] top-0 p-10 ease-in duration-500'}>
            <div className="flex justify-between items-center mb-4">
              <Logo />
              <div onClick={handleClose} className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3">
                <FaX size={20} />
              </div>
            </div>
            <div className="border-b-2 border-gray-300 my-2">
              <p className='font-semibold py-3'>let's build Something Together</p>
            </div>

            <div className='mb-[100px]'>
              <ul>
                {items.map(item => (
                  <Link key={item.id} href={item.url}>
                    <div className='flex items-center gap-3 py-5'>
                      <span>{item.icon}</span>
                      <li onClick={handleClose}>{item.title}</li>
                    </div>
                  </Link>
                ))}
              </ul>
            </div>
            <div className='pb-2'>
              <Link href='/contact'>
                <p className='uppercase tracking-widest bg-gradient-to-b from-[#29cbdd] to-[#6482e0] text-transparent bg-clip-text'>Let's Contact </p>
              </Link>
            </div>
            <ul className='flex gap-2 text-center '>
              {links.map(link => (
                <Link key={link.id} href={link.url}>
                  <Image src={`/assets/icons/${link.image}.svg`} alt={link.title} width={25} height={25} className='text-slate-500' />
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header

// #29cbdd

// #6482e0

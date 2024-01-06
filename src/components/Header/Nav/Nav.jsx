import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { navLinks } from '../../../utils/AllData'

const Nav = () => {
  const links = navLinks
  return (
    <>
      <ul className='hidden md:flex gap-4 text-center '>
        {links.map(link => (
          <Link key={link.id} href={link.url}>
            <Image src={`/assets/icons/${link.image}.svg`} alt={link.title} width={25} height={25} className='text-slate-500' />
          </Link>
        ))}
      </ul>
    </>
  )
}

export default Nav

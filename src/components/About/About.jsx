/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PersonalImage from '../../../public/assets/images/contact.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-20'>
    <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
      <div className='col-span-2'>
        <p className='uppercase text-xl text-center tracking-widest bg-gradient-to-b from-[#29cbdd] to-[#6482e0] text-transparent bg-clip-text'>
          About
        </p>
        <h2 className='text-center py-2'>Who I Am</h2>
        <p className='py-2 text-gray-600'>
        Hello, and Welcome to my Personal Portfolio, My name is Karim. A Front-End Developer based in Cairo, Egypt, it's been 7 monthes since I Started to learn code!.
            I Started With programming fundamentals using Python, I wrote my first line of code "Hello-World!" and build some small programs with python, after that i wonderd how websites are made. I went to google and searched about
            how to build a website. in 2023 I started learning HTML & CSS and make some minor edites on a small websites. What I thought was just a few small edites turned into a love of Programming.
        </p>
        <p className='py-2 text-gray-600'>
        Fascinated with Programming I was quickly drawn to learn more. I started learning javascript, React and was even more enthused with making websites interactive
        </p>
        <Link href='/projects'>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
            Check out some of my latest projects.
          </p>
        </Link>
        <a className='py-2 text-gray-600 underline cursor-pointer' href='/Dev Karim Ismail CV.pdf' download={true}>
        Download CV!
        </a>
      </div>
      <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
        <Image src={PersonalImage} className='rounded-xl' alt='/' />
      </div>
    </div>
  </div>
  )
}

export default About

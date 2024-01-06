import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image
          src="/assets/images/karim-logo.png"
          alt="karim-logo"
          width={60}
          height={60}
        />
      </Link>
    </div>
  )
}

export default Logo

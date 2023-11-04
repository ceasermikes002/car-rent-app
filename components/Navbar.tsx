import React from 'react'
import CustomButton from './CustomButton'
import Link from 'next/link'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='nax-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link
            href={'/'}
            className='flex justify-center items-center'
            >
                <Image
                src={'/logo.svg'}
                alt='logo'
                width={118}
                height={13}
                className="object-contain"
                />
            </Link>
            <div className='w-13 h-10 rounded-md shadow-lg bg-[#eee] flex items-center justify-center relative p-3 px-2 hover:bg-stone-500 transition-all'>
              <UserButton afterSignOutUrl="/" />
            </div>
        </nav>
    </header>
  )
}

export default Navbar
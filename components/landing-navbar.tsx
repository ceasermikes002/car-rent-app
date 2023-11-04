"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs"

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

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
                className="object-contain "
                />
            </Link>
        </nav>
    </header>
  )
}
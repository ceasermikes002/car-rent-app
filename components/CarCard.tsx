"use client"
import { CarProps } from '@/types'
import {useState} from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'
import CarDetails from './CarDetails'
import { calculateCarRent, generateCarImageUrl } from '@/utils'

interface CarCardProps{
    car:CarProps
}

const CarCard = ({car}:CarCardProps) => {
    const 
    {city_mpg,year,make,model,transmission,drive}= car;

    const [isOpen, setIsOpen] = useState(false)

    const carRent=calculateCarRent(city_mpg,year)
  return (
    <div className='flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group'>
        <div className='w-full flex justify-between items-start gap-2'>
          <h2 className='text-[22px] leading-[26px] font-bold capitalize'>
            {make} {model}
          </h2>
        </div>
        <p className='slex mt-6 text[32px] font-extrabold'>
          <span className='text-[14px] self-start font-semibold'>
          &#8358;
          </span>
          {carRent}
          <span className='text-[14px] self-end font-semibold'>
            /day
          </span>
        </p>
        <div className='reltive w-full h-40 my-3 object-contain'>
            <Image src={generateCarImageUrl(car)}
            className='object-contain'
            
            width={200}
            height={200}
            priority
            alt='img'
            />
        </div>
        <div className='relative flex w-full mt-2'>
          <div className='flex group-hover:invisible w-full justify-between text-gray-700'>
            <div className='flex flex-col justify-center items-center gap-2'>
              <Image
              src={'/steering-wheel.svg'}
              width={20}
              height={20}
              alt='img'
              />
              <p className='text-[14px]'>
                {transmission==="a"?'Automatic':
                'Manual'}
              </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <Image
              src={'/tire.svg'}
              width={20}
              height={20}
              alt='img'
              />
              <p className='text-[14px]'>
                {drive.toUpperCase()}
              </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <Image
              src={'/gas.svg'}
              width={20}
              height={20}
              alt='img'
              />
              <p className='text-[14px]'>
                {city_mpg} MPG
              </p>
            </div>
          </div>
          <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
            <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles="text-white text-14[px] leading-[17px] font-bold"
            rightIcon='/right-arrow.svg'
            handleClick={()=>setIsOpen(true)}
            />
          </div>
        </div>
        <CarDetails
        isOpen={isOpen}
        closeModal={()=>
        setIsOpen(false)} car={car}
        
        />
    </div>
  )
}

export default CarCard
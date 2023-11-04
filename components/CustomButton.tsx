"use client"
import { CustomButtonProps } from '@/types'
import Image from 'next/image'
import React from 'react'


const CustomButton = ({title,containerStyles,handleClick,textStyles,rightIcon}:CustomButtonProps) => {
  return (
    <button disabled={false}
    type='button'
    className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
    onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title} 
      </span>
      {rightIcon&&(
        <div className='relative w-6 h-6'>
          <Image
          src={rightIcon}
          alt='img'
          fill
          className='object-contain'
          />
        </div>
      )}
    </button>
  )
}

export default CustomButton
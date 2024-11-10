
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='border-2 border-yellow-100'>
      <ul className="flex justify-center gap-[2rem] list-none m-0 p-0 font-bold text-[30px] text-[#ededed] bg-[#0a0a0a] h-[70px] pt-[10px]">
  
   <li className="pr-[600px]">PORTFOLIO</li>
   <a href="/">Home</a>
   <a href='/aboutme'>About Me</a>
   <a href='/skills'>Skills</a>
    
      </ul>
    </div>
  )
}

export default Header

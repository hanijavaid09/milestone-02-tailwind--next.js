import React from 'react'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'

const Page = () => {
  return (
    
    <div>
  
    
    <Header/>
      <div className="pt-[110px]">
    <b><h1 className="text-[70px] text-center text-left font-serif text-white underline decoration-[2px] decoration-black">ABOUT MYSELF</h1><br></br></b>
    <p className="text-[25px] text-white mb-[20px] text-center">
    Hi! I'm Tahani Javaid student at GIAIC with a strong passionate for web development. I am currently learning the latest technologies and best practices to build efficient, user-freindly websites.</p>
    <p className="text-[25px] text-white mb-[20px] text-center">I'm excited to apply my skills to real_world challenges</p>
    <br /><br /><br /><br />
    </div>
    <Footer/>
    
    </div>
  )
}

export default Page

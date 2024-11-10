import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div style={{ display:"flex"}}>
             <Image
        src="/image02.png"
        alt="image"
        height={500}
        width={500}
        className="p-[30px] mt-[50px] ml-[90px]"
      />
    
    <div className="pl-[10px] pt-[180px]">
  
   <h1 className="text-[70px] text-left font-serif text-white underline decoration-[2px] decoration-black">TAHANI JAVAID   </h1>
   <h1 className="text-[70px] text-left font-serif text-white underline decoration-[2px] decoration-black">Web Developer</h1>
   <h2 className="text-[40px"> A passionate Full Stack Web Developer with a knack for building beautiful and functional websites and web applications </h2>
   <br>
   </br>
   <button className="bg-black text-white text-[22px] font-[100] py-[5px] px-[22px] border-4 border-double border-white rounded-[10px] cursor-pointer shadow-[8px_8px_0px_rgba(0,_0,_0,_0.1)] ml-[25px] hover:bg-white hover:text-black hover:border-black">Contact Me !</button> 
   <button className="bg-black text-white text-[22px] font-[100] py-[5px] px-[22px] border-4 border-double border-white rounded-[10px] cursor-pointer shadow-[8px_8px_0px_rgba(0,_0,_0,_0.1)] ml-[25px] hover:bg-white hover:text-black hover:border-black">Hire Me !</button>
   
     </div>
    </div>

     

  )
}
export default Hero
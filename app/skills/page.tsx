import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react'

const Page = () => {
  return (
    <div>
      <Header/>
      <div className="pt-[110px]">
      <b><h1 className="text-[70px] text-center text-left font-serif text-white underline decoration-[2px] decoration-black">SKILLS</h1></b>
    <h6  className="text-[25px] text-white mb-[10px] ml-[200px]"> ✔ Frond-End DEVELOPMENT : HTML,CSS,Javascipt,React,Bootstrap,TAILWIND CSS </h6>
    <h6  className="text-[25px] text-white mb-[10px] ml-[200px]">✔ Back-End DEVELOPMENT : Node.JS, PHP, MYSQL </h6>
    <h6  className="text-[25px] text-white mb-[10px] ml-[200px]">✔ VERSION CONTROLS : Git , GitHub</h6>
    <h6  className="text-[25px] text-white mb-[10px] ml-[200px]">✔ PLATFORMS : VS Code , Figma , Netlify , Xammp</h6>
    <h6  className="text-[25px] text-white mb-[10px] ml-[200px]">✔ CURRENTLY LEARNING : Next.js </h6><br />
    </div>
    <br /><br />
      <Footer/>
    </div>
  )
}

export default Page;


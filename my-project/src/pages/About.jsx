import React from 'react'
import { useState } from 'react'
import Chairman from '../components/Chairman'
import Managing from '../components/Managing'
import Mission from '../components/Mission'
import Philosophy from '../components/Philosophy'

const About = () => {
   const [text,setText]=useState(<Mission/>)
   
  return (
    <div className='bg-[#F3F4F6]'>
      <div> <img src="about-bg.jpg" alt="" /></div>
     <div className=' gap-4   grid  grid-cols-1  rounded-md    md:flex flex-row border-2 py-4'>
      <div className='  md:basis-1/5 bg-white gap-2 h-52 m-1  '>
      <button className='p-2 border-2 rounded-md md:w-60 m-1  text-[#1E3A8A] font-bold  w-full default:focus:bg-blue-900  focus focus:bg-[#1E3A8A]   focus:text-white'  onClick={()=>setText(<Mission/>) }> Mission</button>
      <button className='p-2 border-2 rounded-md w-60 m-1  text-[#1E3A8A] font-bold  w-full default:focus:bg-blue-900  focus focus:bg-[#1E3A8A]   focus:text-white'  onClick={()=>setText(<Philosophy/>)}> Philosophy</button>
      <button className='p-2 border-2 rounded-md w-60 m-1  text-[#1E3A8A] font-bold  w-full default:focus:bg-blue-900  focus focus:bg-[#1E3A8A]   focus:text-white'  onClick={()=>setText(<Chairman/>)}> Chairman's Desk</button>
      <button className='p-2 border-2 rounded-md w-60 m-1  text-[#1E3A8A] font-bold  w-full default:focus:bg-blue-900  focus focus:bg-[#1E3A8A]   focus:text-white' onClick={()=>(setText(<Managing/>))}> Managing Directer's Desk</button>
      </div>
      

      <div className='  border-2 rounded-md basis-50 md:basis-50 p-5 bg-white '>
        <div className=' '>
        {text}
 
        </div>


      </div>

     </div>
    </div>
  )
}

export default About
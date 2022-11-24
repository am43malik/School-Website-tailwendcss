import React from 'react'
  import EarlyYear from '../components/EarlyYear' 
import { useState } from 'react'
import TheFoundation from '../components/TheFoundation'
import Growing from '../components/Growing'



const Academic = () => {
  const [text,setText]=useState(<EarlyYear/>)
  return (
    <div>
        <div className='bg-[url("/src/images/subheaderbg.jpg")] bg-no-repeat object-contain bg-gray-100 py-10 shadow-sm mb-10'>
  <h1 className='container mx-auto text-4xl font-bold text-blue-900 text-center '>Academic </h1>
        </div  >
        <div className='container mx-auto bg-[gray-100]'>
        <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center mx-5 mt-10 '>
        <button onClick={()=>setText(<EarlyYear/>)}  className='border-2 p-4 text-[14px] md:text-lg text-blue-900 font-bold  border-blue-900  w-full focus:bg-blue-900 focus:text-white focus:border-blue-900 md:border-r-0 bg-gray-100 '>EARLY YEARS PROGRAMME</button>
        <button onClick={()=>setText(<TheFoundation/>)}  className='border-2 p-4 text-[14px] md:text-lg text-blue-900 font-bold border-blue-900 w-full focus:bg-blue-900 focus:text-white focus:border-blue-900 md:border-r-0 '>EARLY YEARS PROGRAMME</button>
        <button onClick={()=>setText(<Growing/>)}  className='border-2 p-4 text-[14px] md:text-lg text-blue-900 font-bold border-blue-900 w-full focus:bg-blue-900 focus:text-white focus:border-blue-900'>GROWING YEARS PROGRAMME</button>
        </div>
        </div>
        <div className='mx-40'>
          {text }
        </div>
    </div>
  )
}

export default Academic
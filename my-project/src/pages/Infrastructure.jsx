import React, { useState } from 'react'
import images from '../imagesData'
const Infrastructure = () => {
 

  
  return (
    <div>
         <div className='bg-[url("/src/images/subheaderbg.jpg")] bg-no-repeat object-contain bg-gray-100 py-10 shadow-sm mb-10'>
  <h1 className='container mx-auto text-4xl font-bold text-blue-900 text-center aos-init aos-animate'>Our Infrastructure </h1>
 </div>

 <div className=' grid grid-cols-1  gap-2 md:grid-cols-2 mt-10 md:gap-1 md:p-5 '>
{
   images.map((data)=>{
   
    return( 
       <div className='drop-shadow-lg m-5 shadow-blue-500/20 bg-white border rounded-b-md aos-init aos-animate p-2'>
        <img src={data.image} alt="" />
        <div className='bg-white'>
        <h1 className='text-blue-900 text-lg font-semibold'>{data.heading}</h1>
        <p className='text-gray-500'>{data.des}</p>
        </div>
      
       </div>
        )

    
   })
  
        
    }
   
 </div>


    </div>
  )
}

export default Infrastructure
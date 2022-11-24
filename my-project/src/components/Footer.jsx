import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='grid grid-cols-1 mt-12 ml-7 justify-between items-center ' >
        <div   className='grid grid-cols-1 md:grid-cols-3 md:mt-0 '>
        <div className=''>
            <h2 className='text-2xl font-semibold leading-none text-[#B91C1C]'>School Address</h2>
            <p className='text-2xl mt-3  text-[#1E43A4]'>Bhondawe Patil Public School</p>
            <p  className='mt-3 p-1 text-[#1E43A4]' >Gut No. 49, Bajaj Nagar,MIDC,<br/>
            Waluj, Aurangabad – 431136. (MH).

            Contact: 6232616161/ 6232717171 

            Email: info@bhondawepatilschool.in</p>
        </div>

        <div className='grid grid-cols-1 mt-10 md:mt-0 justify-center'>
            <h2 className='text-2xl font-semibold ml-12 text-[#B91C1C]'>Quick Links</h2>
            <Link to='/' className='p-1 ml-12 mt-4 ali  text-[#1E43A4] '>Home</Link>
            <Link  to='/about' className='p-1 ml-12  text-[#1E43A4]' >About US</Link>
             <Link  to='/admission' className='p-1 ml-12  text-[#1E43A4]' >Admission</Link>
            <Link  to='/academic' className='p-1 ml-12  text-[#1E43A4]' >Academic</Link>
            <Link  to='/achievement' className='p-1 ml-12  text-[#1E43A4]' >Achievement</Link>
            <Link  to='/Gallery'className='p-1 ml-12  text-[#1E43A4]' >Gallery</Link>
            <Link  to='/contact' className='p-1 ml-12  text-[#1E43A4]' >Contact</Link>
           

            

        </div>
        <div>
        <h2 className=' flex text-2xl font-semibold  text-[#B91C1C] flex '>Follow Us on</h2>
        <div className='flex flex-row items-start justify-start '>
           
            
            <img className='w-10 h-10   mt-5 mr-4   cursor-pointer ' src="facebook.png" alt="" />
            <img   className='w-10 h-10 mt-5 mr-4   cursor-pointer '  src="twitter.png" alt="" />
            <img   className='w-10 h-10 mt-5 mr-4     cursor-pointer '  src="linkedin.png" alt="" />
            <img    className='w-10 h-10 mt-5 mr-4    cursor-pointer' src="youtube.png" alt="" />

            
           

        </div>
        </div>
       
        </div>
       
      
    </div>
  )
}

export default Footer

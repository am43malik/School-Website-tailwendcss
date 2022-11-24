import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
   
    // const [show,setShow]=useState('show')
    const [hidden,setHidden]=useState(false)
    const [show,setShow]=useState(true)
  const toggel=()=>{
    if(show==true){
        setShow(false)
   
  }
  if(show==false){
    setShow(true)

  }}

  const handelHiddden=()=>{
    if(hidden == false){
        setHidden(true)
    }
  }
  


  return (
   <div>
     <div>
        <p className='bg-[#B91C1C] text-white text-sm py-1'>info@bhondawepatilschool.in</p>
       <div className='flex flex-row justify-between'>
       <img src="big-logo.jpg" className='hidden sm:block py-2 object-fill'  alt="" />
       <img  className='  sm:hidden block py-2'  src="logo.jpg" alt="" />
       <button  
     onClick={toggel}
       >
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#1E3A8A"  className=" mt-5 mx-2  sm:hidden block w-9 h-9 border-2    items-center">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
</svg>
       </button>
      
      
       </div>
       
       {
       show? <nav className='bg-[#1E3A8A]   py-3  ' >
       <ul className='flex sm:flex-row flex-col mx-3  text-white font-semibold text-sm'>
        <div>
          
        </div>
         <Link to='/'> <li  className='md:mr-6 ml-4 sm:mx-0 ml-0'>Home</li></Link>
    
         <Link to='/about'> <li  className='mr-10'>About US</li></Link> 
         <Link to='/admission'> <li  className='mr-10'>Admission</li></Link> 
         <Link to='/academic'> <li  className='mr-10'>Academic</li></Link> 
         <Link to='/achievement'> <li  className='mr-10'>Achievement</li></Link> 
         <Link to='/Infrastructure'> <li  className='mr-10'>Infrastructure</li></Link> 
         <Link to='/Gallery'> <li  className='mr-10'>Gallery</li></Link> 
         <Link to='/contact'> <li  className='mr-10'>Contact Us</li></Link> 

          
       </ul>
      </nav>:false
     }
    
    </div>
   </div>
  )
}

export default Navbar

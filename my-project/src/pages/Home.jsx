import React from 'react'
import Slider from '../components/Slider'

const Home = () => {


 
  return (
    <div>
      
        <Slider/>

        <div className='grid grid-cols-1 p-4 sm:grid-cols-2 '>
          <div className='grid grid-cols-2 md:grid grid-cols-2'>
            <div><img className='mt-10 sm:ml-7  ' src="home-welcome-1.jpg" alt="" /></div>
        <img className='mt-5' src="home-welcome-2.jpg" alt="" />
            
          

          </div>
        
        <div className='mr-1 py-4  grid grid-cols-1 md:mt-14 py-4 mr-4 pr-4  '>
        <h1 className=' md:text-3xl font-bold font-serif text-center mb-2 text-[#B91C1C] '>Welcome to</h1>
        <h1 className='md:text-2xl font-bold font-serif text-center mb-2 text-[#1E3A8A]'>Bhondawe Patil Public <br/>School</h1>
        <p className=' text-center mt-2 text-[#A2A6AF] md:mx-10'>Welcome to the abode of intellect where the purpose of education is to equip the child with the most excellent technological proficiency; to empower him with the skills in order to realize his God gifted potential; to creole the light climate so that the child may develop fully as a complete human being At hi BHONDAWE PATIL PUBLIC SCHOOL, one's intellect is I transformed into an illuminated reflection of knowledge and broad outlook towards life.</p>
        </div>
        

      </div>

     <div className=' bg-[url("/src/images/bg-1.jpg")]  md:p-40 py-32 bg-no-repeat object-contain mt-20 '>
 <div className=' w-70 ml-1 md:ml-48 w-96 mt-1 '>
   <div className='text-white opacity-90 bg-blue-800 p-10 '>
 <h1 className='text-3xl font-bold font-sans p-2'>Our Mission</h1>
 <p className='font-sans'>We seek to make our children confident and creative builders of their future.
   Our focus is on the child as a whole entity. 
   We work towards an integrated curriculum that reaches across disciplines and age levels.
    The students will be encouraged to meet academics challenges with openness, 
    enthusiasm and willingness to solve problems. We strive to inspire our students to achieve the highest standards of intellectual 
    and personal development through a satisfactory and stimulating and comprehensive programme. We aim for an atmosphere of cooperation and endeavour to create compassionate, responsible and innovative global citizens,
   committed to the development of India and the world.</p>
   </div>
 </div>
     </div>
 

    </div>
  )
}

export default Home
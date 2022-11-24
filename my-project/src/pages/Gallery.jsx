import React from 'react'

const Gallery = () => {
    const images=[
        {url:'01.jpg'},
        {url:'02.jpg'},
        {url:'03.jpg'},
        {url:'04.jpg'},
        {url:'05.jpg'},
        {url:'06.jpg'},
        {url:'07.jpg'},
        {url:'08.jpg'},
        {url:'09.jpg'},
        {url:'10.jpg'},
        {url:'11.jpg'},
        {url:'12.jpg'},
        
    ]
  return (
    <div className='bg-gray-100 px-4 container mx-auto py-10'>

<div className='grid grid-col-1 md:grid-cols-3 md:gap-4 mt-10 '>
        {
            images.map((item)=>{
                return(
                    <div className='w-full h-full border rounded-md '>
<img  height='500' src={item.url} alt="" srcset="" />
                    </div>
                    
                )
            })
        }

    </div>
    </div>
 
  )
}

export default Gallery
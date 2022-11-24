
import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: " slide-1.jpg" },
  { url: " slide-2.jpg" },
  { url: " slide-3.jpg" },
  { url: " slide-4.jpg" },



];




const Slider = () => {
  return (
    <div className='' >

      <SimpleImageSlider
        width={'100%'}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}

      />

    



     



    </div>
  )
}

export default Slider

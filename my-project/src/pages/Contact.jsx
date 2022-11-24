import React from 'react'

import { useForm } from 'react-hook-form'

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className=' bg-gray-100'>
      <div className='bg-[url("/src/images/subheaderbg.jpg")] bg-no-repeat object-contain bg-gray-100 py-10 shadow-sm mb-10'>
        <h1 className='container mx-auto text-4xl font-bold text-blue-900 text-center '>Contact US</h1>
      </div  >
      <div className='grid items-center justify-center mx-auto w-full bg-white rounded-md shadow-md pb-2 my-10'>
        <div className='text-center text-lg font-play text-gray-500 space-y-1 bg-white mx-10'>
          <h1>School Address</h1>
          <p>Address: Gut No. 49, Bajaj Nagar, MIDC, Waluj, Aurangabad – 431136. (MH).</p>
          <p>Contact: 6232616161/ 6232717171</p>
          <p>Email: info@bhondawepatilschool.in</p>
        </div>
      </div>
      <div className='px-5 grid grid-cols-1 md:grid-cols-2'>
        <div className='px-2'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.821977343844!2d75.23331011491322!3d19.847484086650017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9b6df9173029%3A0x1d20d2e7adfd03c3!2sBhondawe%20Patil%20Public%20School!5e0!3m2!1sen!2sin!4v1668832926786!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>
        <div className=' order-4 bg-blue-900 rounded-md shadow-md p-12 m-5'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-1 gap-x-8 gap-y-8 my-3 '>
              <h1 className='text-3xl text-gray-200 font-semibold mb-4'>Please fill the Form below to Place Admission Enquiry</h1>
              <input  {...register('name', { required: true, maxLength: 30 })} aria-invalid={errors.firstName ? "true" : "false"} type="text" placeholder="Name " name="name" className="border-b-2 border-gray-200 text-red-700 outline-none px-4 py-2 bg-blue-900 col-span-2" />
              {errors.Email?.type === 'required' && <p  className='text-red-700'   role="alert"> Name is required</p>}


              <input  {...register('MobileNumber', { required: true, maxLength: 30 })} aria-invalid={errors.firstName ? "true" : "false"} type="text" placeholder="MobileNumber " name="MobileNumber" className="border-b-2 border-gray-200 text-red-700 outline-none px-4 py-2 bg-blue-900 col-span-2 " />
              {errors.MobileNumber?.type === 'required' && <p  className='text-red-700'   role="alert">Mobile Numberis required</p>}

              <input  {...register('Email', { required: true, maxLength: 30 })} aria-invalid={errors.firstName ? "true" : "false"} type="text" placeholder="Email" name="Email" className="border-b-2 border-gray-200 text-red-700 outline-none px-4 py-2 bg-blue-900 col-span-2" />
              {errors.Email?.type === 'required' && <p  className='text-red-700'   role="alert">Email is required</p>}

              <input  {...register('Subject', { required: true, maxLength: 30 })} aria-invalid={errors.firstName ? "true" : "false"} type="text" placeholder=" Subject" name="Subject" className="border-b-2 border-gray-200 text-red-700 outline-none px-4 py-2 bg-blue-900 col-span-2" />
              {errors.Subject?.type === 'required' && <p  className='text-red-700'   role="alert">Subject is required</p>}

              <input  {...register('Message', { required: true, maxLength: 30 })} aria-invalid={errors.firstName ? "true" : "false"} type="text" placeholder="Message" name="Message" className="border-b-2 border-gray-200 text-red-700 outline-none px-4 py-2 bg-blue-900 col-span-2" />
              {errors.Message?.type === 'required' && <p   className='text-red-700'  role="alert">Message is required</p>}
              

              <button type='submit' className=' w-12  mt-4 px-2 py-2 bg-gradient-to-r from-red-700 to-red-500 rounded-md shadow-md text-sm font-bold text-gray-200'> send</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Contact
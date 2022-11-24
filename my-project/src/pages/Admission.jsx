import React from "react";
import { useForm } from "react-hook-form";
const Admission = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <img src="subheaderbg.jpg" alt="" />

      <div className="bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <img className="  p-3 " src="building.jpg  " alt="" />
            <button className="text-blue-900 font-bold py-1 px-24 hover:bg-blue-900 hover:text-white md:px-56 rounded-md border-blue-900 ml-6 border-2">
              Download Pictures
            </button>
            <div className="order-3">
              {" "}
              <h1 className="text-center font-bold text-blue-900 text-3xl my-3">
                Our Distinctions
              </h1>
              <ul className="list-disc  text-sm md:text-lg py-5 space-y-1 px-1 text-gray-500 ml-5">
                <li>
                  Celebrate of culture of excellence in academics and the all
                  round development of children.
                </li>
                <li>
                  Individual attention to each child to cater to their diverse
                  learning needs.
                </li>
                <li>
                  Talented, experienced, and dedicated teachers with linguistic
                  and cultural diversity.
                </li>
                <li>
                  Inclusive education with a committed team of a student care
                  professionals.
                </li>
                <li>
                  Offers and integrated curriculum from LKJ to class VIII.
                  drawing upon the best of national and international
                  curriculum.
                </li>
                <li>
                  Wide range and depth of community service for program starting
                  from class III.
                </li>
                <li>
                  Upholds Indian culture and values, whilst fostering global
                  citizenship
                </li>
                <li>
                  A safe and secure learning environment with focus on student
                  well being
                </li>
                <li>
                  High quality Student Leadership opportunities including
                  exposure to leaders,Innovators and iconic personalities from
                  all walks of life.
                </li>
                <li>
                  Enrichment classes by experts beyond regular curriculum.
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2 ml-5">
            <h2 className="  text-xl md:text-3xl font-bold text-center text-blue-900">
              Our Aim
            </h2>
            <ul className="list-disc   text-sm md:text-lg py-5 space-y-1 px-1 text-gray-500 ">
              <li>
                To accept and respect all individuals without any bias or
                prejudice irrespective of differences in origin, religion,
                ethnicity or otherwise and create an inclusive learning
                community.
              </li>
              <li>
                To help learners exploit their potential to the fullest and help
                them improve and grow both academically and personally.
              </li>
              <li>
                To provide a dynamic and broad spectrum learning environment
                that will faster critical thinking skills in a students and help
                them become life long learners.
              </li>
              <li>
                To create and awareness among the learners of the social
                responsibilities and equip them with the skills to adapt to the
                changing needs of a global environment
              </li>
            </ul>
            <div className=" order-4 bg-blue-900 rounded-md shadow-md p-12 m-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-8 my-3 ">
                  <h1 className="text-3xl text-gray-200 font-semibold mb-4">
                    Please fill the Form below to Place Admission Enquiry
                  </h1>
                  <input
                    {...register("NameofStudent", {
                      required: true,
                      maxLength: 30,
                    })}
                    aria-invalid={errors.firstName ? "true" : "false"}
                    type="text"
                    placeholder="Name of Student"
                    name="NameofStudent"
                    className="border-b-2 border-gray-200 text-red-700 outline-none px-4 py-2 bg-blue-900 col-span-2"
                  />
                  {errors.NameofStudent?.type === "required" && (
                    <p className="text-red-700" role="alert">
                      Name of Student is required
                    </p>
                  )}

                  <input
                    {...register("AdmissionRequired", {
                      required: true,
                      maxLength: 30,
                    })}
                    aria-invalid={errors.firstName ? "true" : "false"}
                    type="text"
                    placeholder="Admission Required For Which Grade? "
                    name="AdmissionRequired"
                    className="border-b-2 border-gray-200 text-red-700 outline-none px-4 py-2 bg-blue-900 col-span-2 "
                  />
                  {errors.AdmissionRequired?.type === "required" && (
                    <p className="text-red-700" role="alert">
                      Admission is required
                    </p>
                  )}

                  <input
                    {...register("ParentName", {
                      required: true,
                      maxLength: 30,
                    })}
                    aria-invalid={errors.firstName ? "true" : "false"}
                    type="text"
                    placeholder="Parent Name"
                    name="ParentName"
                    className="border-b-2 border-gray-200 text-red-700 outline-none px-4 py-2 bg-blue-900 col-span-2"
                  />
                  {errors.ParentName?.type === "required" && (
                    <p className="text-red-700" role="alert">
                      Parent Name is required
                    </p>
                  )}

                  <input
                    {...register("ContactNumber", {
                      required: true,
                      maxLength: 30,
                    })}
                    aria-invalid={errors.firstName ? "true" : "false"}
                    type="text"
                    placeholder="Contact Number"
                    name="ContactNumber"
                    className="border-b-2 border-gray-200 text-red-700 outline-none px-4 py-2 bg-blue-900 col-span-2"
                  />
                  {errors.ContactNumber?.type === "required" && (
                    <p className="text-red-700" role="alert">
                      Contact Number is required
                    </p>
                  )}

                  <input
                    {...register("EmailID", { required: true, maxLength: 30 })}
                    aria-invalid={errors.firstName ? "true" : "false"}
                    type="text"
                    placeholder="Email ID"
                    name="EmailID"
                    className="border-b-2 border-gray-200 text-red-700 outline-none px-4 py-2 bg-blue-900 col-span-2"
                  />
                  {errors.EmailID?.type === "required" && (
                    <p className="text-red-700" role="alert">
                      Email ID is required
                    </p>
                  )}

                  <input
                    {...register("ResidentialAddress", {
                      required: true,
                      maxLength: 30,
                    })}
                    aria-invalid={errors.firstName ? "true" : "false"}
                    type="text"
                    placeholder="Residential Address"
                    name="ResidentialAddress"
                    className="border-b-2 border-gray-200 text-red-700 outline-none px-4 py-2 bg-blue-900 col-span-2"
                  />
                  {errors.ResidentialAddress?.type === "required" && (
                    <p className="text-red-700" role="alert">
                      Residential Address is required
                    </p>
                  )}

                  {/* <input className="border-b-2 border-gray-200 text-red-700 outline-none px-4 py-2 bg-blue-900 col-span-2" type="text" name="EmailID" id="" /> */}
                  <button
                    type="submit"
                    className=" w-12  mt-4 px-2 py-2 bg-gradient-to-r from-red-700 to-red-500 rounded-md shadow-md text-sm font-bold text-gray-200"
                  >
                    {" "}
                    send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;

'use client'

import { SubmitHandler, useForm } from "react-hook-form"
type Inputs = {

  email: string,
  password: string,

}


const LoginPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>()
  

  

  



  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    

    reset()
  }









  return (
    <div className='flex flex-col md:flex-row justify-center md:gap-5 lg:gap-40  items-center h-screen '>

      <div>
        {/* <img src={signin} alt="" /> */}
        <h1>image</h1>
      </div>

      {/* create from here ...........  */}

      <div>
        <p className='text-3xl text-[#00A7F9] font-semibold '>Save Your Account Now</p>
        <span>please sheare your information in form </span>



        <form onSubmit={handleSubmit(onSubmit)} className='mt-10'>


          {/* email filed  */}

          <div className="relative flex items-center my-6">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 h-5 text-gray-500 absolute left-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>


            <input
              type="email"
              className="pl-10 pr-10 py-2  border-b-2 rounded-md focus:outline-none w-full "
              placeholder="email"
              {...register("email", { required: true })}
            />
          </div>



          {/* password filed  */}
          <div className="relative flex items-center my-6">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 h-5 text-gray-500 absolute left-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
            </svg>

            <input
              type="password"
              className="pl-10 pr-10 py-2  border-b-2 rounded-md focus:outline-none w-full "
              placeholder="password"
              {...register("password", { required: true })}
            />
          </div>


          {errors.email && <p className='font-bold text-red-600'>  This field is email required </p>}
          {errors.password && <p className='font-bold text-red-600'> This field is password required </p>}

          <input type="submit" className='bg-[#00A7F9] text-white py-2 px-6 w-1/2 font-semibold mt-4' />
        </form>


      </div>

    </div>
  )
}

export default LoginPage;
'use client'
import { useUserSignupMutation } from "@/redux/api/groceryApi";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import img from '../../app/image/authentication.jpg'
import Image from "next/image";
import toast from "react-hot-toast";



type Inputs = {
  name: string,
  email: string,
  password: string,
//   phone: string,
  role: string;
//   address: string
}


const Register = () => {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>()
  
  const [userSignup, {data, error, isSuccess, isError} ] = useUserSignupMutation()

  
  if(isSuccess){
    console.log('data', data)
    toast.success(data.message)
    localStorage.setItem('accessToken', data?.data?.accessToken)
  }
  if(isError){
    console.log('error', error)
  }
  


  const onSubmit: SubmitHandler<Inputs> = async (data) => {
  
   
    userSignup({
      data : data
    })
   reset()
  }









  return (
    <div className='flex flex-col md:flex-row justify-center md:gap-5 lg:gap-40  items-center h-screen '>

      <div>
         <Image
         src={img}
         width={500}
         height={500}
         alt="user"
         />
      </div>

      {/* create from here ...........  */}

      <div>
        <p className='text-3xl text-blue-400 font-semibold '>Save Your Account Now</p>
        <span>please sheare your information in form </span>



        <form onSubmit={handleSubmit(onSubmit)} className='mt-10'>



          <div className="relative flex items-center my-2">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 h-5 text-gray-500 absolute left-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>


            <input
              type="text"
              className="pl-10 pr-10 py-2  border-b-2 rounded-md focus:outline-none w-full"
              placeholder="name"
              {...register("name", { required: true })}
            />
          </div>



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
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
            </svg>


            <input
              type="password"
              className="pl-10 pr-10 py-2  border-b-2 rounded-md focus:outline-none w-full "
              placeholder="password"
              {...register("password", { required: true })}
            />
          </div>





          {/* role filed this  */}
          <div className="relative flex items-center my-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 h-5 text-gray-500 absolute left-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
            </svg>


            <input
              type="text"
              className="pl-10 pr-10 py-2  border-b-2 rounded-md focus:outline-none w-full "
              placeholder="role"
              {...register("role")}
            />
          </div>




         



          {errors.name && <span>This field is  required </span>}

          <input type="submit" className='bg-blue-400 text-white py-2 px-6 w-1/2 font-semibold' />
        </form>




         <p className='mt-10'>Already have an account? <Link href='/login'> <span className='text-blue-400 font-semibold'>Login</span></Link> </p>



      </div>

    </div>
  )
}

export default Register
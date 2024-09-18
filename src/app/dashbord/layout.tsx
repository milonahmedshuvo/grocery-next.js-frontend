'use client'

import React, { ReactNode } from 'react'
import { Avatar } from "@nextui-org/react";
import Link from 'next/link';
import { useCurrentUserQuery } from '@/redux/api/groceryApi';



interface childrenTypes {
  children: ReactNode
}



const DashbordLayout =  ({ children }: childrenTypes) => {

      const {data, error }  = useCurrentUserQuery(undefined)

      console.log(data?.data?.role)
      console.log(error)

      
     

  return (
    <div >

      <section className=' flex  flex-col md:flex-row justify-between items-center border-b py-3  '>
        <div>

          <img src='https://coolors.co/assets/img/logo.svg' alt="" />
        </div>

        <div className='flex gap-2'>

          <div className='flex flex-col justify-center items-end'>
            <span className='text-sm '>milon ahmed</span>
            <span className='text-sm leading-3'>bangladesh</span>
          </div>

          <Avatar isBordered color="success" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
        </div>
      </section>



      <div className='flex h-screen my-0' >

        <div className='w-1/5 pr-2 '>
          <ul>
             {
               data?.data?.role === 'user'? <>
               
               <Link href='/dashbord/myorder'>
            <li className='flex justify-between items-center my-4'>
              <div className='flex justify-between items-center gap-2'>
                
                <img className='w-[20px]' src="https://server.niroghealthplus.com/images/1720377036866-447194906-Category%20Herbal%20icon%20%20webp.webp" alt="" />
                <span> My Order </span>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </li>
            </Link>
               
               </> : <>
               
               <Link href='/dashbord/allproduct'>
            <li className='flex justify-between items-center my-4'>
              <div className='flex justify-between items-center gap-2'>
                
                <img className='w-[20px]' src="https://server.niroghealthplus.com/images/1720377036866-447194906-Category%20Herbal%20icon%20%20webp.webp" alt="" />
                <span> All Products</span>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </li>
            </Link>


            <Link href='/dashbord/ordermanage'>
            <li className='flex justify-between items-center my-4'>
              <div className='flex justify-between items-center gap-2'>
                
                <img className='w-[20px]' src="https://server.niroghealthplus.com/images/1720377036866-447194906-Category%20Herbal%20icon%20%20webp.webp" alt="" />
                <span> Orders Manage </span>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </li>
            </Link>
               
               </>
 
             }

            
            


          


          </ul>
        </div>









        {/* dainamic show all children components  */}

        <div className=' w-4/5 pt-4'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashbordLayout
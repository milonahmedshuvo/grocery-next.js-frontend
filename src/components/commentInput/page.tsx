'use client'
import { createComment } from '@/actions/createComment'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

type Inputs = {
  comment: string
}

const CommentInput = ({title, productId}: {title:string, productId:string}) => {

   const { register, handleSubmit, reset } = useForm<Inputs>()

  




  const handleComment:SubmitHandler<Inputs> = async (data) => {
    const token:string = localStorage.getItem('accessToken')

    console.log(token)
    const review = {
      comment: data.comment,
      productName: title,
      productId: productId 
    }
   

  //  console.log(review)

     try{
       const res = await createComment(review, token)
       console.log(res)
       toast.success(res.message)
     }catch(err){
      console.log(err)
      toast.error("You are not authorized user")
     }

    reset()
  }

  

  return (
    <div>
      
      <form action="" onSubmit={handleSubmit(handleComment)}>
         <textarea rows={4} className='border border-gray-300 rounded focus:border-none w-full pl-5 pt-4' placeholder='Give your review this product' id="" {...register('comment')}></textarea>

         <button type="submit" className='bg-blue-400 text-white px-10 py-1 rounded mt-2'>Review</button>
      </form>
      
    </div>
  )
}

export default CommentInput
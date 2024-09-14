import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { TProduct } from "@/app/dashbord/allproduct/page";
import { SubmitHandler, useForm } from "react-hook-form";
import { useProductUpdateMutation } from "@/redux/api/groceryApi";
import toast from "react-hot-toast";


type ProductNode = {
    product: TProduct
}

type Inputs = {
    title: string,
    description: string,
    price: number,
    beforePrice: number,
    image:string
  }

export default function ModalPage({ product }: ProductNode) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { register,handleSubmit,formState: { errors },  } = useForm<Inputs>()
    // console.log( "modal vitor ase,", product)
    const [productUpdate, {data, isSuccess, error, isError}] = useProductUpdateMutation()


    if(isSuccess){
        console.log(data)
        toast.success(data.message)
    }


    if(isError){
        console.log(error)
    }




    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        //  console.log( "handle update data:", data)

        const products = {
            title: data.title,
            description: data.description,
            price: data.price,
            beforePrice: data.beforePrice
        }
         
         productUpdate({    
         id: product._id,   
         product: products,   
         })
    }


    return (
        <>
            <Button className="text-blue-500 hover:text-blue-700 px-3 py-1" onPress={onOpen}>Edit</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>

                                <form onSubmit={handleSubmit(onSubmit)} className='mt-10'>



                                    <div className="relative flex items-center my-2">

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 h-5 text-gray-500 absolute left-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>


                                        <input
                                            type="text"
                                            className="pl-10 pr-10 py-2  border-b-2 rounded-md focus:outline-none w-full"
                                            placeholder="title"
                                            defaultValue={product.title}
                                            {...register("title", { required: true })}
                                        />
                                    </div>


                                    {/* description filed this  */}
                                    <div className="relative flex items-center my-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 h-5 text-gray-500 absolute left-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>



                                        <textarea
                                            // type="text"
                                            className="pl-10 pr-10 border-b-2 rounded-md focus:outline-none w-full "
                                            placeholder="description"
                                            rows= {4}
                                            defaultValue={product.description}
                                            {...register("description", { required: true })}
                                        />
                                    </div>



                                    {/* pricePerHour filed this  */}
                                    <div className="relative flex items-center my-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 h-5 text-gray-500 absolute left-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>



                                        <input
                                            type="number"
                                            className="pl-10 pr-10 py-2  border-b-2 rounded-md focus:outline-none w-full "
                                            placeholder="price"
                                            defaultValue={product.price}
                                            {...register("price", { required: true })}
                                        />
                                    </div>




                                    {/* pricePerHour filed this  */}
                                    <div className="relative flex items-center my-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 h-5 text-gray-500 absolute left-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>



                                        <input
                                            type="number"
                                            className="pl-10 pr-10 py-2  border-b-2 rounded-md focus:outline-none w-full "
                                            placeholder="before price"
                                            defaultValue={product.beforePrice}
                                            {...register("beforePrice", { required: true })}
                                        />
                                    </div>





                                    


                                    {errors.title && <span>This field is  required </span>}

                                    <input type="submit" className='bg-[#3B94E9] text-white py-2 px-6 w-1/2 font-semibold' />
                                </form>




                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

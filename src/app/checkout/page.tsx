'use client'
import { productDelete } from "@/redux/feature/product/productSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"


import { persistor } from '../../redux/store';
import { useOrderCreateMutation } from "@/redux/api/groceryApi";
import toast from "react-hot-toast";



export type TProduct = {
  _id: string,
  title: string,
  description: string,
  price: number,
  beforePrice: number,
  image: string,
  isDaleted: boolean,
  quantity: number
}





const CheckOutPage = () => {
  const { products, count, totalPrice } = useAppSelector((state) => state.product)
  const dispatch = useAppDispatch()
  console.log("checkout page:", products)

  const [orderCreate, { data, isSuccess, error, isError }] = useOrderCreateMutation()




  const clearPersistedState = () => {
    persistor.purge()
    location.reload()
  }





  if (isSuccess) {
    console.log(data)
    toast.success(data.message)
  }

  if (isError) {
    toast.error(data.message)
    console.log(error)
  }


  const handleOrder = () => {
    const data = {
      items: count,
      totalPrice: totalPrice,
    }

    orderCreate({
      data: data
    })

    clearPersistedState()

  }









  return (

    <div>
      <button onClick={clearPersistedState} >State reset</button>


      <div className="flex flex-col md:flex-row justify-between ">





        <div className=" w-2/3 ">
          <div className="overflow-x-auto mt-6">
            <table className="min-w-full text-left table-auto">
              <thead>
                <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
                  <th className="px-6 py-3">Image</th>
                  {/* <th className="px-6 py-3">Name</th> */}
                  <th className="px-6 py-3">Price</th>
                  <th className="px-6 py-3">quantity</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>



                {products?.map((product: TProduct) => (
                  <tr key={product._id} className="bg-white border-b">
                    <td className="px-6 py-4">
                      <img src={product.image} alt={product.title} className="w-16 h-16 object-cover rounded" />
                    </td>
                    {/* <td className="px-6 py-4">{product.title}</td> */}
                    <td className="px-6 py-4 text-black">${product.price}</td>
                    <td className="px-6 py-4 text-black">{product.quantity}</td>
                    <td onClick={() => dispatch(productDelete(product))}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-black hover:text-red-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>


        <div className="w-1/3 bg-red-50 mt-4 p-6 ">
          <span className="text-sm text-black ">By placing your order, you agree to our company Privacy policy and Conditions of use.</span>
          <p className="border-b-1 text-lg mt-3 text-black">Order Summary</p>

          <div className="flex justify-between items-center mt-6 text-gray-500 text-sm my-2">
            <span>Items {count} </span>
            <span>{totalPrice}</span>
          </div>

          <div className="flex justify-between items-center text-gray-500 text-sm my-2">
            <span>Delivery Charge</span>
            <span>15</span>
          </div>

          <div className="flex justify-between items-center text-gray-500 text-sm my-2 border-t-2 pt-1">
            <span>Total Price</span>
            <span> {totalPrice ? totalPrice + 15 : "00"} </span>
          </div>

          <button onClick={handleOrder} className="bg-blue-400 text-white w-full rounded-lg py-1 mt-3 "> Proceed to checkout </button>

         <div className="mt-4 text-sm text-black ">
          <label>
            <input type="checkbox" checked className="text-black" /> Cash On Delivery
          </label>
          </div>
        </div>
      </div>

      {/* out site content  */}


    </div>
  )
}

export default CheckOutPage
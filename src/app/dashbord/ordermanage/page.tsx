'use client'

import { useOrderGetAllQuery, useOrderStatusChangeMutation } from "@/redux/api/groceryApi"
import toast from "react-hot-toast"


type TOrder = {
    _id: string,
    totalPrice: number,
    isDaleted: boolean,
    orderStatus: string,
    email: string,
    items: number,
}


const  OrderManagepage = () => {     
    const {data} = useOrderGetAllQuery(undefined)
    const [orderStatusChange, {data:status, isSuccess}] = useOrderStatusChangeMutation()
    console.log( "RTK query:", data)

    // console.log("status", status)
    if(isSuccess){
        toast.success(status.message)
    }



//    useEffect( () => {
//    fetch('https://grocery-store-backend-eight.vercel.app/api/v1/order/all')
//     .then((res) => res.json())
//     .then((data) => console.log("this data ay", data))

//    }, [])




    const handleOrderStatus = (id:string) => {
      orderStatusChange({id: id})
        
    }



  return (
    <div className="overflow-x-auto h-screen">
      <table className="min-w-full text-left table-auto">
        <thead>
          <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
            <th className="px-6 py-3">User Email</th>
            <th className="px-6 py-3">Items</th>
            <th className="px-6 py-3">Total Price</th>
            <th className="px-6 py-3">Order Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((product:TOrder) => (
            <tr key={product._id} className="bg-white border-b">
              <td className="px-6 py-4">{product.email}</td>
              <td className="px-6 py-4">${product.items}</td>
              <td className="px-6 py-4">${product.totalPrice}</td>
              <td className="px-6 py-4 ">
                {
                    product.orderStatus === 'panding' ? <button onClick={() => handleOrderStatus(product._id)} className="text-white bg-blue-400 px-2 rounded"> {product.orderStatus} </button> : <button className="text-white bg-green-400 px-2 rounded"> {product.orderStatus} </button>
                }


                {/* <button onClick={() => handleOrderStatus(product._id)} className="text-white bg-blue-400 px-2 rounded"> {product.orderStatus} </button> */}
              </td>
              <td className="px-6 py-4">
                <button className="text-blue-500 hover:text-blue-700 px-3 py-1">Edit</button>
                <button className="text-red-500 hover:text-red-700 px-3 py-1 ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrderManagepage